export function extractRepoInfo(url: string): { owner: string; repo: string } | null {
  try {
    const match = url.match(/github\.com\/([^\/]+)\/([^\/\.]+)/);
    return match ? { owner: match[1], repo: match[2] } : null;
  } catch {
    return null;
  }
}