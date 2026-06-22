import {
  FETCH_TIMEOUT_MS,
  MAX_RESPONSE_BYTES,
  FETCH_HEADERS,
  isUrlAllowed,
} from "./constants";

export async function fetchPage(url: string): Promise<string | null> {
  if (!isUrlAllowed(url)) {
    console.warn(`[scraper] URL blocked by SSRF check: ${url}`);
    return null;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      headers: FETCH_HEADERS,
      redirect: "follow",
      signal: controller.signal,
    });

    if (!res.ok) {
      console.warn(`[scraper] HTTP ${res.status} for ${url}`);
      return null;
    }

    const contentLength = res.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_RESPONSE_BYTES) {
      console.warn(
        `[scraper] Response too large (${contentLength} bytes) for ${url}`
      );
      return null;
    }

    return await res.text();
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      console.warn(`[scraper] Timeout after ${FETCH_TIMEOUT_MS}ms for ${url}`);
    } else {
      console.warn(
        `[scraper] Fetch failed for ${url}:`,
        err instanceof Error ? err.message : err
      );
    }
    return null;
  } finally {
    clearTimeout(timer);
  }
}
