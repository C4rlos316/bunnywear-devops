import Reveal from "../Reveal";
import { EXPERIENCE } from "./data";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="eyebrow text-mint">Experiencia</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Trayectoria
        </h2>
      </Reveal>

      <div className="mt-12 space-y-8">
        {EXPERIENCE.map((exp, i) => (
          <Reveal key={exp.role} delay={0.1 * i}>
            <div className="rounded-2xl border border-line bg-surface p-8">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-semibold text-ink">{exp.role}</h3>
                <span className="text-xs text-ash">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-mint">{exp.company}</p>
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
                    <span className="text-mint">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-surface-2 px-3 py-1 text-xs text-ash"
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
