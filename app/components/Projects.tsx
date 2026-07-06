'use client';

import { useEffect, useState } from "react";
import { GitHubRepo } from "../lib/github";
import { ProjectCard } from "./ProjectCard";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { resumeData } from "../data/resume";
import { getGitHubRepos } from "../lib/github/api";
import { LoadingProjectCards } from "./LoadingProjectCards";

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const uniqueRepos = [...new Set(resumeData.projects.map(p => p.repository))];
    let mounted = true;
    
    async function fetchRepos() {
      try {
        const githubRepos = await getGitHubRepos(uniqueRepos);
        if (mounted) {
          setRepos(githubRepos);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to load GitHub repositories');
          console.error('Error:', err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchRepos();
    return () => { mounted = false; };
  }, []);

  if (!resumeData.projects?.length) {
    return (
      <section id="projects" className="py-10">
        <h2 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Projects
        </h2>
        <Alert>
          <Info className="h-4 w-4" aria-hidden="true" />
          <AlertDescription>
            Add your projects here! Each project should include:
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm">
              <li>Project name</li>
              <li>Description</li>
              <li>Technologies used</li>
              <li>Link to live demo (if available)</li>
              <li>Link to source code</li>
              <li>Your role and contributions</li>
              <li>Key achievements or metrics</li>
            </ul>
          </AlertDescription>
        </Alert>
      </section>
    );
  }

  return (
    <section id="projects" className="py-10">
      <h2 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Projects
      </h2>
      {loading ? (
        <LoadingProjectCards />
      ) : error ? (
        <Alert>
          <Info className="h-4 w-4" aria-hidden="true" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {resumeData.projects.map((project, index) => {
            const repo = repos.find(r => r.html_url === project.repository);
            return (
              <ProjectCard
                key={`${project.repository}-${index}`}
                repo={repo}
                project={project}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}