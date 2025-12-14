import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, Image as ImageIcon } from "lucide-react";

const features = [
  "Single-focus practice timer",
  "Session logging with history",
  "Daily and lifetime totals",
  "Milestones and celebrations",
  "Trophy cabinet for achievements",
  "User-controlled data export/import",
  "No ads, no trackers, no subscriptions",
  "Privacy-first design",
];

export default function Press() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight"
              data-testid="text-press-title"
            >
              Press Kit
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to write about Setflo.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">About Setflo</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Setflo is a single-focus practice timer for iOS. Built for musicians,
                  martial artists, writers, and anyone committed to mastery, Setflo helps
                  you show up daily for one thing—without habit clutter, overwhelming
                  dashboards, or streak shame. The app follows a "quiet luxury" design
                  philosophy: calm, minimal, and motivating. All data stays on-device,
                  with user-controlled exports. No ads, no trackers, no subscriptions.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg"
                  data-testid={`text-feature-${index}`}
                >
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <Card key={num} className="overflow-hidden" data-testid={`card-screenshot-${num}`}>
                  <div className="aspect-[9/19] bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Screenshot {num}</p>
                      <p className="text-xs">Placeholder</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              High-resolution screenshots available upon request.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Brand Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card data-testid="card-logo-assets">
                <CardContent className="p-6">
                  <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-muted-foreground">
                      <Download className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Logo SVG/PNG</p>
                    </div>
                  </div>
                  <h3 className="font-semibold">Logo Package</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Light and dark versions in SVG and PNG formats.
                  </p>
                  <Button variant="outline" className="mt-4" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card data-testid="card-app-icon">
                <CardContent className="p-6">
                  <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-muted-foreground">
                      <Download className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">App Icon</p>
                    </div>
                  </div>
                  <h3 className="font-semibold">App Icon</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    High-resolution app icon for editorial use.
                  </p>
                  <Button variant="outline" className="mt-4" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <Card data-testid="card-press-contact">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Press & Partnerships</h3>
                    <p className="mt-2 text-muted-foreground">
                      For press inquiries, partnership opportunities, or interview
                      requests, please contact us at{" "}
                      <a
                        href="mailto:press@setflo.io"
                        className="text-primary font-medium hover:underline"
                        data-testid="link-press-email"
                      >
                        press@setflo.io
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
