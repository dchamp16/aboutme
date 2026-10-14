'use client';

import { roleProfiles } from "../data/roleProfiles";
import { useRole } from "../context/RoleContext";

export default function Summary() {
  const { role } = useRole();
  return (
    <section id="summary" className="py-10 first:pt-0">
      <h2 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Summary
      </h2>
      <p className="text-[0.95rem] leading-relaxed text-foreground">
        {roleProfiles[role].summary}
      </p>
    </section>
  );
}
