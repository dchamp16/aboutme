import { resumeData } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <h2 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Experience
      </h2>
      <div className="space-y-8">
        {resumeData.experience.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-sans text-base font-semibold text-foreground">
                {exp.position}
              </h3>
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {exp.dates}
              </span>
            </div>
            <p className="mb-3 font-mono text-xs text-muted-foreground">
              {exp.company} · {exp.location}
            </p>
            <ul className="space-y-1.5">
              {exp.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="relative pl-4 text-sm leading-relaxed text-foreground before:absolute before:left-0 before:text-primary before:content-['—']"
                >
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
