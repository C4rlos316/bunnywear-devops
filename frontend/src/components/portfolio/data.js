export const NAV_LINKS = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export const SKILLS = [
  { name: "Linux (Rocky Linux, Ubuntu)", category: "Sistemas Operativos & Redes" },
  { name: "NGINX", category: "Sistemas Operativos & Redes" },
  { name: "VPN", category: "Sistemas Operativos & Redes" },
  { name: "SSH", category: "Sistemas Operativos & Redes" },

  { name: "Google Cloud Platform (GCP)", category: "Cloud & Infraestructura" },
  { name: "Oracle Cloud Infrastructure (OCI)", category: "Cloud & Infraestructura" },
  { name: "DigitalOcean", category: "Cloud & Infraestructura" },

  { name: "Kubernetes", category: "Contenedores & DevOps" },
  { name: "K3s", category: "Contenedores & DevOps" },
  { name: "Docker", category: "Contenedores & DevOps" },
  { name: "Git", category: "Contenedores & DevOps" },
  { name: "GitHub Actions", category: "Contenedores & DevOps" },
  { name: "ArgoCD", category: "Contenedores & DevOps" },
  { name: "Ansible", category: "Contenedores & DevOps" },

  { name: "Prometheus", category: "Monitoreo & Observabilidad" },
  { name: "Grafana", category: "Monitoreo & Observabilidad" },
  { name: "Loki", category: "Monitoreo & Observabilidad" },
  { name: "Zabbix", category: "Monitoreo & Observabilidad" },
  { name: "SNMP", category: "Monitoreo & Observabilidad" },

  { name: "MySQL", category: "Bases de Datos" },
  { name: "PostgreSQL", category: "Bases de Datos" },
  { name: "MongoDB", category: "Bases de Datos" },
  { name: "Firebase", category: "Bases de Datos" },

  { name: "Python (Django, FastAPI)", category: "Lenguajes & Frameworks" },
  { name: "Java", category: "Lenguajes & Frameworks" },
  { name: "JavaScript / TypeScript", category: "Lenguajes & Frameworks" },
  { name: "React", category: "Lenguajes & Frameworks" },
  { name: "Next.js", category: "Lenguajes & Frameworks" },
  { name: "Bash", category: "Lenguajes & Frameworks" },

  { name: "Android Studio", category: "Herramientas" },
  { name: "YAML / JSON", category: "Herramientas" },
];

export const EXPERIENCE = [
  {
    role: "Desarrollador de Sistemas Embebidos/IoT — Servicio Social",
    company: "ICAT-UNAM",
    period: "Ago 2025 – Feb 2026",
    description:
      "Proyecto App Sensei: kit educativo de sensores con ESP32 y aplicación Android.",
    bullets: [
      "Implementé comunicación BLE entre app Android y ESP32 con servicios UUID y provisioning de credenciales WiFi para conectividad en red local.",
      "Desarrollé servidor HTTP embebido en ESP32 para lectura e interacción en tiempo real con sensores desde la app Android.",
    ],
    stack: ["Android Studio", "Java", "Bluetooth BLE", "ESP32", "HTTP Server", "Git"],
  },
  {
    role: "Desarrollador Android Freelance",
    company: "Proyectos independientes",
    period: "2019 – 2021",
    description: null,
    bullets: [
      "Desarrollé 4 aplicaciones móviles integrando Firebase, Google Maps API, PayPal SDK y notificaciones push.",
    ],
    stack: ["Android Studio", "Java", "Firebase Realtime DB", "Google Cloud APIs", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "BunnyWear DevOps — Plataforma E-Commerce en Kubernetes",
    description:
      "Desplegué una plataforma e-commerce en Kubernetes con frontend, backend y base de datos persistente. Implementé automatización de despliegues, monitoreo de servicios, centralización de logs y respaldo automático de información. Evolucionado a este mismo portfolio, corriendo en DigitalOcean con HTTPS, CI/CD GitOps y observabilidad completa.",
    tags: ["Kubernetes", "Docker", "Django REST Framework", "Next.js", "MySQL", "Prometheus", "Grafana", "Loki"],
    link: "https://github.com/C4rlos316/bunnywear-devops",
  },
  {
    title: "GlowApp — Plataforma Social de Gaming con Microservicios",
    description:
      "Desarrollé una plataforma social para videojuegos basada en arquitectura de microservicios, con servicios independientes para gestión de usuarios, contenido social, foros y juegos. Diseñé la comunicación entre servicios y el despliegue de contenedores para facilitar la escalabilidad y el mantenimiento.",
    tags: ["FastAPI", "Next.js", "React", "MongoDB", "Docker", "Docker Compose"],
    link: "https://github.com/C4rlos316/GlowApp",
  },
  {
    title: "Monitoreo de Infraestructura VPN con Zabbix 7.0",
    description:
      "Desplegué infraestructura VPN con ZeroTier y configuré monitoreo híbrido con SNMP y Zabbix Agent. Implementé parámetros personalizados que consultan la REST API de ZeroTier para métricas en tiempo real, con alertas automáticas y dashboards KPI.",
    tags: ["ZeroTier VPN", "Zabbix 7.0", "SNMP", "Linux", "REST APIs", "YAML"],
    link: null,
  },
];

export const CERTIFICATIONS = [
  { name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle", year: "2025" },
  { name: "Build and Secure Networks in Google Cloud", issuer: "Google Cloud Skills Boost", year: "2024" },
  { name: "Google Cloud Computing: Networking & Security", issuer: "Google Cloud Skills Boost", year: "2024" },
  { name: "Google Cloud Computing Foundations", issuer: "Google Cloud Skills Boost", year: "2024" },
  { name: "AWS Educate: Machine Learning Foundations", issuer: "AWS", year: "2025" },
  { name: "Relational Database Systems", issuer: "Coursera", year: "2023" },
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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carlosmhernandezgut/" },
  { label: "GitHub", href: "https://github.com/C4rlos316" },
  { label: "Email", href: "mailto:cama619@gmail.com" },
];
