import { CONTACT_LINKS } from "./portfolio/data";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-xs text-ash sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} Carlos Mario Hernández Gutiérrez.
        </p>
        <div className="flex gap-6">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-mint"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
