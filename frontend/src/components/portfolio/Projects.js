import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { PROJECTS } from "./data";

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-4xl px-6 py-36">
      <div className="text-center">
        <Reveal>
          <p className="eyebrow text-ash">Proyectos</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="headline-gradient mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">
            Lo que he construido
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 space-y-5">
        {PROJECTS.map((project, i) => {
          const Wrapper = project.link ? "a" : "div";
          const wrapperProps = project.link
            ? { href: project.link, target: "_blank", rel: "noreferrer" }
            : {};

          return (
            <Reveal key={project.title} delay={0.1 * i}>
              <Wrapper
                {...wrapperProps}
                className="glass-card group block rounded-2xl p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  {project.link && (
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-ash transition-colors group-hover:text-ink"
                    />
                  )}
                </div>
                <p className="mt-3 text-base leading-relaxed text-ash">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-ash"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
