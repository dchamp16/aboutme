import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resumeData } from "../data/resume";

export default function Experience() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Professional Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary/20 pl-4 pb-4">
              <h3 className="text-lg font-semibold">{exp.position}</h3>
              <div className="text-sm text-muted-foreground mb-2">
                <p>{exp.company} • {exp.location}</p>
                <p>{exp.dates}</p>
              </div>
              <ul className="list-disc list-inside space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}