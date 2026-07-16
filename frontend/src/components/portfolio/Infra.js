import { Server, ShieldCheck, GitBranch, LineChart } from "lucide-react";
import Reveal from "../Reveal";
import { INFRA_ITEMS } from "./data";

const ICONS = [Server, ShieldCheck, GitBranch, LineChart];

export default function Infra() {
  return (
    <section id="infra" className="mx-auto max-w-4xl px-6 py-36">
      <div className="text-center">
        <Reveal>
          <p className="eyebrow text-ash">Infraestructura</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="headline-gradient mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">
            Cómo corre este sitio
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ash">
          Este portfolio no es solo frontend — está desplegado en un cluster
          Kubernetes real en DigitalOcean, con el mismo pipeline de CI/CD que
          usaría en producción.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        {INFRA_ITEMS.map((item, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={item.title} delay={0.1 * i}>
              <div className="glass-card h-full rounded-2xl p-6">
                <Icon size={22} className="text-ash" />
                <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
