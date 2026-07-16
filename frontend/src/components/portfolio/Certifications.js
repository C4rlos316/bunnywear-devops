import { BadgeCheck } from "lucide-react";
import Reveal from "../Reveal";
import { CERTIFICATIONS } from "./data";

export default function Certifications() {
  return (
    <section id="certificaciones" className="mx-auto max-w-4xl px-6 py-36">
      <div className="text-center">
        <Reveal>
          <p className="eyebrow text-ash">Certificaciones</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="headline-gradient mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">
            Formación continua
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert, i) => (
          <Reveal key={cert.name} delay={0.05 * i}>
            <div className="glass-card flex items-start gap-3 rounded-2xl p-5">
              <BadgeCheck size={18} className="mt-0.5 shrink-0 text-ash" />
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
