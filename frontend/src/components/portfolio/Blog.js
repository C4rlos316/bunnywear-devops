import Reveal from "../Reveal";

export default function Blog({ posts = [] }) {
  return (
    <section id="blog" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="eyebrow text-mint">Blog</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Notas y aprendizajes
        </h2>
      </Reveal>

      {posts.length > 0 ? (
        <div className="mt-12 space-y-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={0.1 * i}>
              <article className="rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-mint">
                <h3 className="text-xl font-semibold text-ink">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
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
          <p className="mt-10 text-sm text-ash">
            Todavía no hay entradas publicadas. Vuelve pronto.
          </p>
        </Reveal>
      )}
    </section>
  );
}
