"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techStack = {
  framework: [
    { name: 'Next.js 13', description: 'React framework with App Router' },
    { name: 'React 18', description: 'UI library with hooks' },
    { name: 'TypeScript', description: 'Type-safe JavaScript' },
  ],
  ui: [
    { name: 'Tailwind CSS', description: 'Utility-first CSS' },
    { name: 'shadcn/ui', description: 'Accessible components' },
    { name: 'Lucide Icons', description: 'Beautiful icons' },
  ],
  features: [
    { name: 'Dark Mode', description: 'System/manual theme switching' },
    { name: 'Responsive', description: 'Mobile-first design' },
    { name: 'SEO Optimized', description: 'Meta tags and descriptions' },
  ]
};

export default function TechStack() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Technology Stack</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge
                    key={item.name}
                    variant="secondary"
                    className="group relative"
                  >
                    <span>{item.name}</span>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                      {item.description}
                    </span>
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