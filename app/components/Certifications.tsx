import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-10">
      <h2 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Certifications & Specialized Credential
      </h2>
      {certifications.length > 0 ? (
        <div className="space-y-4">
          {certifications.map((certification) => (
            <div
              key={`${certification.issuer}-${certification.name}`}
              className="flex items-start gap-4 rounded-md border border-border p-4"
            >
              <Award aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-sans text-base font-semibold text-foreground">
                    {certification.name}
                  </h3>
                  {certification.date && (
                    <span className="font-mono text-xs text-muted-foreground">
                      {certification.date}
                    </span>
                  )}
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {certification.issuer}
                </p>
                {certification.methodologies && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Methodologies: </span>
                    {certification.methodologies.join(", ")}.
                  </p>
                )}
                {certification.credentialUrl && (
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    View credential
                    <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                    <span className="sr-only"> for {certification.name} (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          Certification details coming soon.
        </p>
      )}
    </section>
  );
}
