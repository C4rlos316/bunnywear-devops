import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { PROJECTS } from "./data";

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="eyebrow text-mint">Proyectos</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Lo que he construido
        </h2>
      </Reveal>

      <div className="mt-12 space-y-6">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={0.1 * i}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-mint"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-ink transition-colors group-hover:text-mint">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-ash transition-colors group-hover:text-mint"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ash">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-2 px-3 py-1 text-xs text-ash"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
