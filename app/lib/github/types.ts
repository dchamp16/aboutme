export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  updated_at: string;
}

export interface RepoInfo {
  owner: string;
  repo: string;
}