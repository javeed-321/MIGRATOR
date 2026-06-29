import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import * as fs from 'fs';
import * as path from 'path';

const R2 = {
  accessKeyId: process.env.R2_ACCESS_KEY_ID!,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  endpoint: process.env.R2_ENDPOINT!,
  bucketName: process.env.R2_BUCKET_NAME || 'documentation-images',
};

const CDN_BASE = 'https://blob-cdn.documentation.ai';

const MIME_TYPES: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

function getS3Client(): S3Client {
  return new S3Client({
    endpoint: R2.endpoint,
    credentials: {
      accessKeyId: R2.accessKeyId,
      secretAccessKey: R2.secretAccessKey,
    },
    region: 'auto',
    forcePathStyle: true,
  });
}

function generateStorageKey(filename: string): string {
  const timestamp = Date.now();
  const randomId = Math.random().toString(36).substring(2, 10);
  const ext = path.extname(filename);
  const name = path.basename(filename, ext).replace(/[^a-zA-Z0-9-_]/g, '-');
  return `${timestamp}-${randomId}-${name}${ext}`;
}

function getCdnUrl(storageKey: string): string {
  return `${CDN_BASE}/${storageKey}?fm=auto&auto=compress,format`;
}

async function uploadFile(
  s3: S3Client,
  filePath: string,
  storageKey: string,
): Promise<string> {
  const fileBuffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  await s3.send(
    new PutObjectCommand({
      Bucket: R2.bucketName,
      Key: storageKey,
      Body: fileBuffer,
      ContentType: contentType,
    }),
  );

  return getCdnUrl(storageKey);
}

async function main() {
  if (!R2.accessKeyId || !R2.secretAccessKey || !R2.endpoint) {
    console.error('Missing R2 credentials in .env.local');
    console.error('Required: R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_ENDPOINT');
    process.exit(1);
  }

  const diagramsDir = path.resolve(__dirname, '../deployment-output/guides/diagrams');

  if (!fs.existsSync(diagramsDir)) {
    console.error(`Diagrams folder not found: ${diagramsDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(diagramsDir).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return MIME_TYPES[ext] !== undefined;
  });

  console.log(`Found ${files.length} images to upload\n`);

  const s3 = getS3Client();
  const mapping: Record<string, string> = {};

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(diagramsDir, file);
    const storageKey = generateStorageKey(file);

    try {
      const cdnUrl = await uploadFile(s3, filePath, storageKey);
      mapping[`/diagrams/${file}`] = cdnUrl;
      console.log(`[${i + 1}/${files.length}] ${file}`);
      console.log(`  → ${cdnUrl}\n`);
    } catch (err: any) {
      console.error(`[${i + 1}/${files.length}] FAILED: ${file}`);
      console.error(`  ${err.message}\n`);
    }
  }

  const outputPath = path.resolve(__dirname, '../upload-record.json');
  fs.writeFileSync(outputPath, JSON.stringify(mapping, null, 2));
  console.log(`\nDone. Mapping saved to ${outputPath}`);
  console.log(`Uploaded: ${Object.keys(mapping).length}/${files.length}`);
}

main().catch((err) => {
  console.error('Script failed:', err);
  process.exit(1);
});
