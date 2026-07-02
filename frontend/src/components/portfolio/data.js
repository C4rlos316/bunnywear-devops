export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Infraestructura", href: "#infra" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export const SKILLS = [
  { name: "Kubernetes", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "K3s", category: "DevOps" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "ArgoCD", category: "CI/CD" },
  { name: "Prometheus", category: "Observabilidad" },
  { name: "Grafana", category: "Observabilidad" },
  { name: "Loki", category: "Observabilidad" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Django REST Framework", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Git", category: "Herramientas" },
];

export const PROJECTS = [
  {
    title: "BunnyWear → Portfolio (este sitio)",
    description:
      "E-commerce migrado de Kubernetes local a DigitalOcean con K3s, HTTPS con Let's Encrypt, CI/CD con GitHub Actions + ArgoCD, y observabilidad con Prometheus, Grafana y Loki. Evolucionado a este portfolio.",
    tags: ["K3s", "Django", "Next.js", "ArgoCD", "Grafana"],
    link: "https://github.com/C4rlos316/bunnywear-devops",
  },
];

export const INFRA_ITEMS = [
  {
    title: "Cluster K3s en DigitalOcean",
    description: "2 nodos (master 4GB + worker 2GB) corriendo Kubernetes ligero con Traefik como Ingress Controller.",
  },
  {
    title: "HTTPS automático",
    description: "cert-manager + Let's Encrypt renuevan certificados TLS automáticamente para todos los subdominios.",
  },
  {
    title: "CI/CD GitOps",
    description: "GitHub Actions construye imágenes Docker etiquetadas por commit SHA; ArgoCD sincroniza y despliega automáticamente.",
  },
  {
    title: "Observabilidad completa",
    description: "Prometheus recolecta métricas, Grafana las visualiza, Loki centraliza logs de todos los pods del cluster.",
  },
];

export const CONTACT_LINKS = [
  { label: "GitHub", href: "https://github.com/C4rlos316" },
  { label: "Email", href: "mailto:cama619@gmail.com" },
];
