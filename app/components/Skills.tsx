"use client";

import { Badge } from "@/components/ui/badge";
import { resumeData } from "../data/resume";
import { SkillCategory } from "../types/resume";

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    { title: "Frontend", skills: resumeData.skills.frontend },
    { title: "Backend", skills: resumeData.skills.backend },
    { title: "Database", skills: resumeData.skills.database },
    { title: "Operating Systems", skills: resumeData.skills.os },
    { title: "Cloud & DevOps", skills: resumeData.skills.cloudAndDevops },
    {
      title: "System Administration & IT",
      skills: resumeData.skills.systemAdminAndIt,
    },
    {
      title: "Programming Languages",
      skills: resumeData.skills.programmingLanguages,
    },
    { title: "Development Tools", skills: resumeData.skills.developmentTools },
  ];

  return (
    <section id="skills" className="py-10">
      <h2 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Skills
      </h2>
      <div className="space-y-4">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col gap-2 sm:flex-row sm:gap-6"
          >
            <h3 className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground sm:w-40 sm:shrink-0 sm:pt-1.5">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="font-mono text-xs font-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
