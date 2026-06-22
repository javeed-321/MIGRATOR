export async function pool<T>(
  tasks: (() => Promise<T>)[],
  limit: number,
  onProgress?: (completed: number, total: number) => void
): Promise<T[]> {
  const results = new Array<T>(tasks.length);
  let next = 0;
  let completed = 0;

  async function worker(): Promise<void> {
    while (next < tasks.length) {
      const idx = next++;
      results[idx] = await tasks[idx]();
      completed++;
      onProgress?.(completed, tasks.length);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(limit, tasks.length) }, () => worker())
  );
  return results;
}
