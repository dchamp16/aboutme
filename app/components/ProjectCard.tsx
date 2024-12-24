'use client';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitHubRepo } from "../lib/github";
import { Calendar, Github, Star } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import { Project } from "../types/resume";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  repo?: GitHubRepo;
  project: Project;
}

export function ProjectCard({ repo, project }: ProjectCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          {repo && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4" aria-hidden="true" />
              <span>{repo.stargazers_count}</span>
            </div>
          )}
        </div>
        {repo && (
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span>Updated {formatDistanceToNow(new Date(repo.updated_at))} ago</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground text-justify">
          {project.description}
        </p>
        <div className="space-y-2">
          <div className="space-y-1">
            {project.highlights.map((highlight, index) => (
              <p key={index} className="text-sm text-justify">• {highlight}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary"
                aria-label={`Technology: ${tech}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between pt-4">
          {repo && (
            <Badge 
              variant="outline"
              aria-label={`Primary language: ${repo.language}`}
            >
              {repo.language}
            </Badge>
          )}
          <Button
            variant="outline"
            size="sm"
            className="ml-auto"
            onClick={() => window.open(project.repository, '_blank')}
          >
            <Github className="h-4 w-4 mr-2" />
            View Repository
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}