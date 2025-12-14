import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// TODO: Replace with MDX-based blog posts
const blogPosts = [
  {
    slug: "one-focus-beats-ten-habits",
    title: "One focus beats ten habits",
    excerpt:
      "Why committing to a single practice yields better results than spreading yourself thin across multiple habits.",
    date: "December 14, 2024",
    readTime: "4 min read",
  },
  {
    slug: "practice-snacks",
    title: "Practice snacks: why small sessions compound",
    excerpt:
      "The power of short, consistent practice sessions and why 15 minutes a day beats 2 hours once a week.",
    date: "December 10, 2024",
    readTime: "5 min read",
  },
  {
    slug: "greasing-the-groove",
    title: "Greasing the groove (without the hype)",
    excerpt:
      "A practical look at the 'greasing the groove' technique and how to apply it to any skill.",
    date: "December 5, 2024",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight"
              data-testid="text-blog-title"
            >
              Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Thoughts on practice, mastery, and showing up.
            </p>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card
                  className="hover-elevate transition-all duration-300 cursor-pointer"
                  data-testid={`card-blog-post-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2 flex-wrap">
                          <span>{post.date}</span>
                          <span>·</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
