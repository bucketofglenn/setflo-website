import { Card, CardContent } from "@/components/ui/card";
import { Music, Swords, PenTool, Heart, Languages } from "lucide-react";

const useCases = [
  {
    icon: Music,
    title: "Music practice",
    description: "Piano, guitar, violin—any instrument. Track your scales, études, and repertoire work.",
  },
  {
    icon: Swords,
    title: "Martial arts",
    description: "Karate, BJJ, boxing. Log your kata, drills, and sparring sessions.",
  },
  {
    icon: PenTool,
    title: "Writing",
    description: "Morning pages, fiction, journaling. Build your daily writing habit.",
  },
  {
    icon: Heart,
    title: "Rehab & recovery",
    description: "Physical therapy, meditation, stretching. Consistent practice for healing.",
  },
  {
    icon: Languages,
    title: "Language learning",
    description: "Vocabulary, speaking practice, immersion time. One language at a time.",
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            data-testid="text-usecases-title"
          >
            Built for practitioners
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Whatever your craft, Setflo helps you show up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card
              key={useCase.title}
              className="border-border/50 hover-elevate transition-all duration-300"
              data-testid={`card-usecase-${index}`}
            >
              <CardContent className="p-6">
                <useCase.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold">{useCase.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
