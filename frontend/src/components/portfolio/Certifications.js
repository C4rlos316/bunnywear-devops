import { BadgeCheck } from "lucide-react";
import Reveal from "../Reveal";
import { CERTIFICATIONS } from "./data";

export default function Certifications() {
  return (
    <section id="certificaciones" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="eyebrow text-mint">Certificaciones</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Formación continua
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert, i) => (
          <Reveal key={cert.name} delay={0.05 * i}>
            <div className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5">
              <BadgeCheck size={18} className="mt-0.5 shrink-0 text-mint" />
              <div>
                <p className="text-sm font-medium text-ink">{cert.name}</p>
                <p className="mt-1 text-xs text-ash">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
