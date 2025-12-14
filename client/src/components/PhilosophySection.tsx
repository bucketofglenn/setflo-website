export default function PhilosophySection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-5xl font-bold tracking-tight mb-8"
          data-testid="text-philosophy-title"
        >
          The Setflo Philosophy
        </h2>
        <p
          className="text-base md:text-lg text-muted-foreground leading-relaxed"
          data-testid="text-philosophy-content"
        >
          Setflo is built on a simple belief: meaningful progress comes from showing up, not being pushed. It doesn't try to manage your habits, optimise your schedule, or keep you accountable with guilt. Instead, Setflo gives you a clear, honest record of time spent practicing one thing — so you can see that effort accumulate in its own way. No noise. No pressure. Just a quiet tool that respects your focus, your autonomy, and the long view of mastery.
        </p>
      </div>
    </section>
  );
}
