"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resumeData } from "../data/resume";
import { SkillCategory } from "../types/resume";

export default function Skills() {
    const skillCategories: SkillCategory[] = [
        { title: "Frontend", skills: resumeData.skills.frontend },
        { title: "Backend", skills: resumeData.skills.backend },
        { title: "Other Programming Languages", skills: resumeData.skills.other },
        { title: "Databases", skills: resumeData.skills.databases },
        { title: "Cloud & DevOps", skills: resumeData.skills.cloud },
        { title: "Development Tools", skills: resumeData.skills.tools },
        { title: "Prototyping & Wireframing", skills: resumeData.skills.prototyping },
        { title: "Soft Skills", skills: resumeData.skills.softSkills }
    ];
;

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
