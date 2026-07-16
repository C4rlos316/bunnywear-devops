import Reveal from "../Reveal";
import { EXPERIENCE } from "./data";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-4xl px-6 py-36">
      <div className="text-center">
        <Reveal>
          <p className="eyebrow text-ash">Experiencia</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="headline-gradient mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">
            Trayectoria
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 space-y-5">
        {EXPERIENCE.map((exp, i) => (
          <Reveal key={exp.role} delay={0.1 * i}>
            <div className="glass-card rounded-2xl p-8">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-semibold tracking-tight text-ink">{exp.role}</h3>
                <span className="text-xs text-ash">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-ash">{exp.company}</p>
              {exp.description && (
                <p className="mt-4 text-sm leading-relaxed text-ash">
                  {exp.description}
                </p>
              )}
              <ul className="mt-4 space-y-2">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm leading-relaxed text-ash"
                  >
                    <span className="text-ash/60">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-ash"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
