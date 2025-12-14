export default function HowItFeelsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-5xl font-bold tracking-tight"
          data-testid="text-feels-title"
        >
          How it feels
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <span className="px-6 py-3 rounded-full bg-background border border-border text-lg font-medium">
            Calm
          </span>
          <span className="px-6 py-3 rounded-full bg-background border border-border text-lg font-medium">
            Minimal
          </span>
          <span className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-lg font-medium">
            Motivating
          </span>
        </div>
        <p
          className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed"
          data-testid="text-feels-description"
        >
          No streak shame. No guilt trips. Just a quiet companion that helps you show up
          for your practice—imperfectly, consistently, on your own terms.
        </p>
      </div>
    </section>
  );
}
