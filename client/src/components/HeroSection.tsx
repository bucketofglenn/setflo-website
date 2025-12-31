import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] pt-24 pb-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight leading-none"
              data-testid="text-hero-title"
            >
              One focus. No distractions.
            </h1>
            <p
              className="mt-6 text-xl md:text-2xl font-semibold text-muted-foreground"
              data-testid="text-hero-subtitle"
            >
              Do one thing well.
            </p>
            <p
              className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
              data-testid="text-hero-description"
            >
              Track the total time you spend practicing one skill — and watch it
              add up.
            </p>

            <p
              className="mt-6 text-sm text-muted-foreground/80 max-w-lg leading-relaxed italic"
              data-testid="text-hero-philosophy"
            >
              No habit stacks. No schedules. No noise.
              <br />
              Just show up, log your time, and let consistency compound.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button size="lg" asChild data-testid="button-download-hero">
                <a href="https://apps.apple.com/us/app/setflo/id6756414411">
                  Download on the App Store
                </a>
              </Button>
              <Link
                href="#faq"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                data-testid="link-learn-more"
              >
                Learn how Setflo works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
