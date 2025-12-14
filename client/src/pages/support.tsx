import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, MessageCircle, Lightbulb } from "lucide-react";

const troubleshooting = [
  {
    question: "Import/export not showing file picker",
    answer:
      "On iOS, make sure you have iCloud Drive enabled or another file provider configured. Go to Settings > [Your Name] > iCloud > iCloud Drive and ensure it's turned on. The file picker requires at least one cloud storage provider to be active.",
  },
  {
    question: "Where do my backup files go?",
    answer:
      "When you export your data, iOS will prompt you to choose a save location. You can save to iCloud Drive, Files app, or any other configured file provider. The exported file is a JSON file that you can import back into Setflo at any time.",
  },
  {
    question: "Notifications not working",
    answer:
      "Check that Setflo has notification permissions in Settings > Notifications > Setflo. Make sure notifications are enabled and not set to 'Deliver Quietly'. If using Focus modes, add Setflo to your allowed apps list.",
  },
  {
    question: "Timer continues in background",
    answer:
      "Yes, the timer is designed to continue running even when you switch apps or lock your screen. This allows you to practice without keeping the app in the foreground. Your session will be logged when you return.",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight"
              data-testid="text-support-title"
            >
              Support
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help. We typically reply within 2–3 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Card data-testid="card-support-email">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Primary Support</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  For help with the app, bugs, or technical issues.
                </p>
                <a
                  href="mailto:support@setflo.io"
                  className="mt-4 inline-block text-primary font-medium hover:underline"
                  data-testid="link-support-email"
                >
                  support@setflo.io
                </a>
              </CardContent>
            </Card>

            <Card data-testid="card-general-email">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">General Inquiries</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  For questions, feedback, or just to say hello.
                </p>
                <a
                  href="mailto:hello@setflo.io"
                  className="mt-4 inline-block text-primary font-medium hover:underline"
                  data-testid="link-hello-email"
                >
                  hello@setflo.io
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
            <Accordion type="single" collapsible className="w-full">
              {troubleshooting.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Card data-testid="card-feature-requests">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Feature Requests</h3>
                  <p className="mt-2 text-muted-foreground">
                    Have an idea for making Setflo better? We'd love to hear it. Send your
                    suggestions to{" "}
                    <a
                      href="mailto:hello@setflo.io"
                      className="text-primary font-medium hover:underline"
                    >
                      hello@setflo.io
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>App Version: 1.0.0</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
