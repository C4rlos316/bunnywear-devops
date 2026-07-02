import { Server, ShieldCheck, GitBranch, LineChart } from "lucide-react";
import Reveal from "../Reveal";
import { INFRA_ITEMS } from "./data";

const ICONS = [Server, ShieldCheck, GitBranch, LineChart];

export default function Infra() {
  return (
    <section id="infra" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="eyebrow text-mint">Infraestructura</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Cómo corre este sitio
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ash">
          Este portfolio no es solo frontend — está desplegado en un cluster
          Kubernetes real en DigitalOcean, con el mismo pipeline de CI/CD que
          usaría en producción.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {INFRA_ITEMS.map((item, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={item.title} delay={0.1 * i}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <Icon size={22} className="text-mint" />
                <h3 className="mt-4 text-base font-semibold text-ink">
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
