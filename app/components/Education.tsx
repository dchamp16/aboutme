'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resumeData } from "../data/resume";

export default function Education() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="border-l-2 border-primary/20 pl-4">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <div className="text-sm text-muted-foreground mb-4">
                <p>{edu.institution} • {edu.location}</p>
                <p>{edu.dates}</p>
              </div>
              {edu.courses && (
                <div className="space-y-4">
                  {edu.courses.map((course, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-sm font-medium">
                        {course.code}: {course.name}
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {course.highlights.map((highlight, hidx) => (
                          <li key={hidx} className="text-sm text-muted-foreground">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}