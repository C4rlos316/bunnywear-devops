import Reveal from "../Reveal";

export default function Blog({ posts = [] }) {
  return (
    <section id="blog" className="mx-auto max-w-4xl px-6 py-36">
      <div className="text-center">
        <Reveal>
          <p className="eyebrow text-ash">Blog</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="headline-gradient mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">
            Notas y aprendizajes
          </h2>
        </Reveal>
      </div>

      {posts.length > 0 ? (
        <div className="mt-16 space-y-5">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={0.1 * i}>
              <article className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{post.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ash">
                  {post.excerpt || post.content?.slice(0, 160)}
                </p>
                <p className="mt-4 text-xs text-ash">
                  {new Date(post.created_at).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal delay={0.15}>
          <p className="mt-12 text-center text-base text-ash">
            Todavía no hay entradas publicadas. Vuelve pronto.
          </p>
        </Reveal>
      )}
    </section>
  );
}
