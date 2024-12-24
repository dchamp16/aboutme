import { Octokit } from '@octokit/rest';
import { GitHubRepo } from './types';
import { extractRepoInfo } from './utils';

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

export async function getGitHubRepos(urls: string[]): Promise<GitHubRepo[]> {
  try {
    // Remove duplicate URLs
    const uniqueUrls = [...new Set(urls)];
    
    const repoPromises = uniqueUrls.map(async (url) => {
      const repoInfo = extractRepoInfo(url);
      if (!repoInfo) return null;

      try {
        const { data } = await octokit.repos.get({
          owner: repoInfo.owner,
          repo: repoInfo.repo,
        });

        return {
          name: data.name,
          description: data.description,
          html_url: data.html_url,
          topics: data.topics || [],
          language: data.language || 'Not specified',
          stargazers_count: data.stargazers_count,
          updated_at: data.updated_at,
        };
      } catch (error) {
        console.error(`Error fetching repo ${url}:`, error);
        return null;
      }
    });

    const repos = await Promise.all(repoPromises);
    return repos.filter((repo): repo is GitHubRepo => repo !== null);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}