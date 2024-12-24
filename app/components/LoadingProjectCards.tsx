import { Card } from "@/components/ui/card";

export function LoadingProjectCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[...Array(4)].map((_, i) => (
        <Card key={i} className="h-48 animate-pulse bg-muted" aria-label="Loading project card" />
      ))}
    </div>
  );
}