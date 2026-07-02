import Reveal from "../Reveal";
import { SKILLS } from "./data";

export default function Skills() {
  const categories = [...new Set(SKILLS.map((s) => s.category))];

  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="eyebrow text-mint">Skills</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Stack con el que trabajo
        </h2>
      </Reveal>

      <div className="mt-12 space-y-8">
        {categories.map((cat, i) => (
          <Reveal key={cat} delay={0.05 * i}>
            <div>
              <h3 className="eyebrow text-ash">{cat}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {SKILLS.filter((s) => s.category === cat).map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-line px-4 py-1.5 text-sm text-ink transition-colors hover:border-mint hover:text-mint"
                  >
                    {skill.name}
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
