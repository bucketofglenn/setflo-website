import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Is it a habit tracker?",
    answer:
      "No. Setflo is a focus tracker. It measures time spent practicing one skill so you can see your effort add up — even if it happens in small sessions. It's about progress you can feel and prove, not managing a list of habits.",
  },
  {
    question: "Why doesn't Setflo have reminders or notifications?",
    answer:
      "Setflo is designed to support practice when you choose to show up — not to guilt you into it. It doesn't try to run your day or create pressure. When you practice, you log the time. That's it. Calm, minimal, and intentional.",
  },
  {
    question: "Do I have to create an account?",
    answer:
      "No. Setflo doesn't require an account because your practice shouldn't depend on logins, sign-ups, or syncing. It's built to be simple and private: open the app, practice, log time, move on. Your data stays on your device unless you choose to export it.",
  },
  {
    question: "Can I rename my focus later?",
    answer:
      "Yes. You can update the name of your focus at any time without affecting your saved practice data. If you want to commit to a completely new goal, we recommend starting fresh by clearing your existing data and beginning again. This reflects the core philosophy of Setflo: one goal at a time.",
  },
];

const tipsItems = [
  {
    question: "Choose one focus — and keep it simple",
    answer:
      "Pick a single skill you want to improve. A clear focus makes progress feel obvious.",
  },
  {
    question: "Count everything that moves you forward",
    answer:
      "Warmups, drills, messy sessions, deep work — it all counts. Setflo helps you see that it adds up.",
  },
  {
    question: "Use a daily target as a \"minimum\"",
    answer:
      "Set a small daily target you can hit even on busy days. It's about consistency, not perfection.",
  },
  {
    question: "Review your history, not your mood",
    answer:
      "On off days, check your calendar and totals. Your progress is larger than any single session.",
  },
  {
    question: "Start fresh when the goal changes",
    answer:
      "If your focus genuinely changes, clearing data can be a powerful reset. One focus, one chapter at a time.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/20">
      <div className="max-w-3xl mx-auto px-6">
        <div id="faq" className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight"
              data-testid="text-faq-title"
            >
              FAQ
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} data-testid={`faq-item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div id="getting-the-most-out-of-setflo">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight"
              data-testid="text-tips-title"
            >
              Getting the most out of Setflo
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {tipsItems.map((tip, index) => (
              <AccordionItem key={index} value={`tip-${index}`} data-testid={`tip-item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {tip.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {tip.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
