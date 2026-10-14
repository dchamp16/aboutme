"use client";

import { Badge } from "@/components/ui/badge";
import { roleProfiles } from "../data/roleProfiles";
import { useRole } from "../context/RoleContext";

export default function Skills() {
  const { role } = useRole();
  const skillCategories = roleProfiles[role].skills;

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
