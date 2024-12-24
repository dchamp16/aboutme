'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resumeData } from "../data/resume";

export default function Summary() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Professional Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-justify">{resumeData.summary}</p>
      </CardContent>
    </Card>
  );
}