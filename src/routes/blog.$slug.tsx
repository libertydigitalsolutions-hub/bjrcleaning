import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, blogPosts } from "@/lib/blog-posts";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article not found | BJR Cleaning" }] };
    return {
      meta: [
        { title: `${post.title} | BJR Cleaning Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-brand-orange">
        ← Back to blog
      </Link>
    </div>
  ),
  component: BlogPost,
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div>
      <article className="container mx-auto max-w-3xl px-4 py-14">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> All articles
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-orange">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>

        <div className="my-8 aspect-[2/1] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-orange/30 via-brand-blue/30 to-brand-green/30">
          <div className="flex h-full items-center justify-center text-4xl font-extrabold text-white/50">
            {post.category}
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {post.content.map((p: string, i: number) => (
            <p key={i} className="mb-5 text-base leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>
      </article>

      <section className="border-t border-border bg-muted/30 py-14">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Keep reading</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/blog/$slug"
                params={{ slug: r.slug }}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  {r.category}
                </span>
                <h3 className="mt-2 text-base font-bold leading-snug transition-colors group-hover:text-brand-orange">
                  {r.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
