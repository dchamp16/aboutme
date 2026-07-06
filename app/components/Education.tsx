'use client';

import { resumeData } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="py-10">
      <h2 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Education
      </h2>
      <div className="space-y-8">
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-sans text-base font-semibold text-foreground">
                {edu.degree}
              </h3>
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {edu.dates}
              </span>
            </div>
            <p className="mb-3 font-mono text-xs text-muted-foreground">
              {edu.institution} · {edu.location}
            </p>
            {edu.courses && (
              <div className="space-y-3">
                {edu.courses.map((course, idx) => (
                  <div key={idx}>
                    <p className="mb-1.5 text-sm font-medium text-foreground">
                      {course.code}: {course.name}
                    </p>
                    <ul className="space-y-1.5">
                      {course.highlights.map((highlight, hidx) => (
                        <li
                          key={hidx}
                          className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:text-primary before:content-['—']"
                        >
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
    </section>
  );
}
