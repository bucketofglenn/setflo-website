export default function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-5xl font-bold tracking-tight"
          data-testid="text-problem-title"
        >
          Most habit apps sell you more.
        </h2>
        <p
          className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-primary"
          data-testid="text-problem-solution"
        >
          Setflo sells you less.
        </p>
        <p
          className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          data-testid="text-problem-description"
        >
          Habit clutter. Overwhelming dashboards. Too many streak mechanics. Gamification
          that distracts from the work itself. You don't need another app demanding your
          attention—you need one that respects it.
        </p>
      </div>
    </section>
  );
}
