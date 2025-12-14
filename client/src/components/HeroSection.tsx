import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToEmailCapture = () => {
    document.getElementById("email-capture")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[85vh] pt-24 pb-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight leading-none"
              data-testid="text-hero-title"
            >
              Do one thing well.
            </h1>
            <p
              className="mt-6 text-xl md:text-2xl font-semibold text-muted-foreground"
              data-testid="text-hero-subtitle"
            >
              One focus. No distractions.
            </p>
            <p
              className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
              data-testid="text-hero-description"
            >
              Setflo is a single-focus practice timer that helps you show up daily—without
              habit clutter, dashboards, or noise.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild data-testid="button-download-hero">
                {/* TODO: Replace with actual App Store URL */}
                <a href="#download">Download on iOS</a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={scrollToEmailCapture}
                data-testid="button-get-updates"
              >
                Get updates
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p
              className="mt-12 text-sm text-muted-foreground"
              data-testid="text-social-proof"
            >
              Built for musicians, martial artists, writers, and anyone chasing mastery.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
