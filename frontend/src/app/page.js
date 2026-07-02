import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Infra from "@/components/portfolio/Infra";
import Blog from "@/components/portfolio/Blog";
import Contact from "@/components/portfolio/Contact";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://django-backend:8000";

async function getPosts() {
  try {
    const res = await fetch(`${API_URL}/api/blog/`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : data.results || [];
  } catch (error) {
    console.error("No se pudieron cargar las entradas del blog:", error);
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <ClientLayout>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Infra />
        <Blog posts={posts} />
        <Contact />
        <Footer />
      </main>
    </ClientLayout>
  );
}
