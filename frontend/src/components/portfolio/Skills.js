import Reveal from "../Reveal";
import { SKILLS } from "./data";

export default function Skills() {
  const categories = [...new Set(SKILLS.map((s) => s.category))];

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-36">
      <div className="text-center">
        <Reveal>
          <p className="eyebrow text-ash">Skills</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="headline-gradient mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">
            Stack con el que trabajo
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat} delay={0.08 * i}>
            <div className="glass-card h-full rounded-2xl p-6">
              <h3 className="text-sm font-medium text-ink">{cat}</h3>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {SKILLS.filter((s) => s.category === cat).map((skill) => (
                  <span key={skill.name} className="text-sm text-ash">
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
