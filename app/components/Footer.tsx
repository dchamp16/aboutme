"use client";

import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const techStack = {
  framework: [
    { name: "Next.js 13", description: "React framework with App Router" },
    { name: "React 18", description: "UI library with hooks" },
    { name: "TypeScript", description: "Type-safe JavaScript" },
  ],
  ui: [
    { name: "Tailwind CSS", description: "Utility-first CSS" },
    { name: "shadcn/ui", description: "Accessible components" },
    { name: "Lucide Icons", description: "Beautiful icons" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Built with
            </h3>
            <div className="space-y-4">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category} className="space-y-2">
                  <h4 className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge
                        key={item.name}
                        variant="secondary"
                        className="group relative font-mono text-xs font-normal"
                      >
                        <span>{item.name}</span>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[3px] border border-border bg-popover px-2 py-1 font-sans text-xs text-popover-foreground opacity-0 transition-opacity group-hover:opacity-100">
                          {item.description}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Source Code
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This resume is open source. Feel free to check out the code and
              use it as inspiration for your own portfolio.
            </p>
            <a
              href="https://github.com/dchamp16/aboutme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-primary transition-colors hover:text-primary/80"
            >
              <Github className="h-4 w-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Peter Justine Ramos. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
