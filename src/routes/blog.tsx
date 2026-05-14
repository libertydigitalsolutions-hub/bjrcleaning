import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blog-posts";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Cleaning Tips & News | BJR Cleaning Blog — Perth WA" },
      {
        name: "description",
        content:
          "Practical cleaning tips, vacate checklists, NDIS guides and seasonal advice from Perth's trusted home and commercial cleaning team.",
      },
      { property: "og:title", content: "Cleaning Tips & News | BJR Cleaning Blog" },
      {
        property: "og:description",
        content:
          "Practical cleaning tips, vacate checklists, NDIS guides and seasonal advice from Perth's trusted home and commercial cleaning team.",
      },
    ],
  }),
  component: BlogIndex,
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogIndex() {
  const [featured, ...rest] = blogPosts;

  return (
    <div>
      <section className="border-b border-border bg-gradient-to-br from-brand-blue/10 via-background to-brand-orange/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            BJR Cleaning Blog
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            Cleaning tips, checklists & local advice
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Insights from over a decade of cleaning Perth homes and businesses — from bond cleans to
            solar panel maintenance.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        {/* Featured */}
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group mb-12 grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg md:grid-cols-2"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-orange/30 to-brand-blue/30 md:aspect-auto">
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-extrabold text-white/40">
              {featured.category}
            </div>
          </div>
          <div className="flex flex-col justify-center p-8">
            <span className="inline-block w-fit rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-orange">
              Featured · {featured.category}
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-tight transition-colors group-hover:text-brand-orange md:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
            <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {formatDate(featured.date)}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
            </div>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-orange">
              Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-blue/20 to-brand-green/20">
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-white/50">
                  {post.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  {post.category}
                </span>
                <h3 className="mt-2 flex-1 text-lg font-bold leading-snug transition-colors group-hover:text-brand-orange">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
