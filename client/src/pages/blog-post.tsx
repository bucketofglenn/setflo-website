import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// TODO: Replace with actual MDX content
const blogContent: Record<string, { title: string; date: string; readTime: string; content: string }> = {
  "one-focus-beats-ten-habits": {
    title: "One focus beats ten habits",
    date: "December 14, 2024",
    readTime: "4 min read",
    content: `
There's a peculiar trap that productivity culture sets for us: the more habits we track, the more productive we'll become. Install the app, add ten habits, gamify everything, and watch the magic happen.

Except it doesn't work that way.

## The Problem with Habit Stacking

When you try to build ten habits at once, you're not building ten habits—you're building zero. You're spreading your willpower so thin that nothing gets the attention it needs to actually stick.

The research is clear: willpower is a limited resource. Every decision you make throughout the day depletes it. Every habit you try to maintain costs mental energy. And when you're trying to juggle exercise, meditation, reading, journaling, hydration, sleep tracking, screen time limits, meal prep, language learning, and whatever else your favorite app suggests—you're setting yourself up for failure.

## The Power of One

What if, instead of tracking ten habits, you committed fully to one?

Not as a stepping stone to adding more later. Not as the first domino in a cascade. Just one thing, done well, for as long as it takes to make it truly part of who you are.

This is what musicians understand. A pianist doesn't practice ten instruments. A martial artist doesn't split their time between ten styles. They pick one thing and go deep.

## Going Deep

Depth beats breadth. Mastery beats dabbling. Showing up every day for one thing—even imperfectly—beats perfectly tracking ten things you never actually do.

This is why Setflo exists. Not as another habit tracker asking you to add more. But as a simple tool that helps you commit to one thing and actually do it.

One focus. No distractions.

What's your one thing?
    `,
  },
  "practice-snacks": {
    title: "Practice snacks: why small sessions compound",
    date: "December 10, 2024",
    readTime: "5 min read",
    content: `
There's a common belief that serious practice requires serious time. An hour minimum. Preferably two. Anything less is just warming up.

This belief keeps a lot of people from practicing at all.

## The Myth of the Long Session

Sure, extended practice sessions have their place. Deep work requires time to settle in. Complex skills benefit from sustained focus. But here's what the research actually shows: frequency matters more than duration.

Practicing for 15 minutes every day beats practicing for 2 hours once a week. It's not even close.

## Why Small Sessions Work

Your brain doesn't build skills during practice. It builds them between practice sessions, during rest and sleep. This is when neural pathways strengthen and new connections form.

More frequent sessions mean more of these consolidation periods. It means your brain is constantly working on the skill, even when you're not actively practicing.

Small sessions also reduce resistance. Fifteen minutes feels achievable. Two hours feels like a commitment that requires scheduling, preparation, and mental warmup. You can sneak in fifteen minutes before breakfast. Two hours requires blocking out your afternoon.

## Practice Snacks

Think of short sessions as "practice snacks"—quick, satisfying bursts of focused work that add up over time.

A 15-minute piano session in the morning. A 10-minute kata practice during lunch. A quick writing session before bed.

None of these feel significant in the moment. But compound interest is powerful. Over a year, those 15-minute daily sessions add up to over 90 hours of practice. That's real progress.

## The Setflo Approach

This is exactly what Setflo is designed for. Start the timer, do your thing, stop when you're done. No minimum session length. No guilt about short sessions.

Every minute counts. Every session builds. Just show up and do the work, even if it's just a snack.
    `,
  },
  "greasing-the-groove": {
    title: "Greasing the groove (without the hype)",
    date: "December 5, 2024",
    readTime: "6 min read",
    content: `
"Greasing the groove" is a term that gets thrown around a lot in fitness circles. It sounds almost mystical—like there's a secret technique that unlocks rapid skill acquisition.

Let's cut through the hype and look at what it actually is.

## What It Means

The concept comes from Pavel Tsatsouline, a fitness instructor who popularized Russian strength training methods in the West. The idea is simple: practice a movement frequently throughout the day, but never to fatigue.

Instead of doing three sets of maximum pull-ups once a day, you do one or two pull-ups many times throughout the day. Never enough to get tired. Just enough to practice the movement pattern.

## Why It Works

There's solid neuroscience behind this approach. Skill acquisition is about building neural pathways. These pathways strengthen with repetition, but fatigue interferes with the quality of that repetition.

By staying fresh for every rep, you're reinforcing the correct movement pattern without the degradation that comes with exhaustion. You're also dramatically increasing your total practice volume without the recovery cost of intense sessions.

## Beyond Fitness

Here's where it gets interesting: this principle applies far beyond pull-ups.

Musicians have known this for centuries. Short, frequent practice sessions beat marathon sessions. A pianist might practice a difficult passage ten times in the morning, ten times after lunch, and ten times in the evening—always stopping before frustration sets in.

Writers call it "the writing habit." A few hundred words in the morning. A few more at lunch. Another burst before bed. Never enough to burn out. Always enough to keep the momentum.

## The Practical Application

The key elements are:

1. **Frequency over intensity**: Many small sessions beat few large ones.
2. **Stop before fatigue**: Quit while you're ahead. Always leave something in the tank.
3. **Consistency over heroics**: Showing up daily matters more than occasional peak performance.

This is the kind of practice Setflo is built for. Track your sessions. Keep them short. Show up often. Let the groove do its work.

No hype necessary.
    `,
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8" data-testid="button-back-to-blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4 flex-wrap">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
            data-testid="text-post-title"
          >
            {post.title}
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("1. ") || paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter(Boolean);
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 text-muted-foreground my-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^[\d]+\.\s*\*\*|\*\*:|\*\*|-\s*/g, "").trim()}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-muted-foreground leading-relaxed my-4">
                  {paragraph.trim()}
                </p>
              );
            })}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
