import { Card, CardContent } from "@/components/ui/card";
import { Timer, History, TrendingUp, Trophy, Download, Award } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Single focus timer",
    description: "One practice, one timer. No multitasking. Just focused work.",
  },
  {
    icon: History,
    title: "Session logging",
    description: "Automatic session history so you can see your commitment over time.",
  },
  {
    icon: TrendingUp,
    title: "Daily + lifetime totals",
    description: "Track your progress with simple, meaningful metrics that matter.",
  },
  {
    icon: Award,
    title: "Milestones & celebrations",
    description: "Mark your achievements without gamification gimmicks.",
  },
  {
    icon: Trophy,
    title: "Trophy cabinet",
    description: "Replay your wins on supported platforms. Own your progress.",
  },
  {
    icon: Download,
    title: "Export/import backup",
    description: "Your data, your control. Export and import whenever you want.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            data-testid="text-features-title"
          >
            What Setflo is
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to track your practice. Nothing you don't.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="border-border/50 hover-elevate transition-all duration-300"
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
