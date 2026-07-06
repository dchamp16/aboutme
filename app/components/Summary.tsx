'use client';

import { resumeData } from "../data/resume";

export default function Summary() {
  return (
    <section id="summary" className="py-10 first:pt-0">
      <h2 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Summary
      </h2>
      <p className="max-w-[62ch] text-[0.95rem] leading-relaxed text-foreground">
        {resumeData.summary}
      </p>
    </section>
  );
}
