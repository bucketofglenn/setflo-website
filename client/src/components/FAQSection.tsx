import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is it a habit tracker?",
    answer:
      "Not really. Setflo is a single-focus practice log—built for mastery, not habit clutter. Instead of tracking multiple habits, you commit to one thing and measure your time spent on it.",
  },
  {
    question: "Do I need streaks?",
    answer:
      "No. You can show up imperfectly and still make progress. Setflo doesn't punish you for missing a day. Life happens—what matters is that you keep coming back.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Your data stays on-device. Backups are user-initiated exports that you control completely. We don't collect, sell, or share your personal data.",
  },
  {
    question: "Can I change my focus later?",
    answer:
      "Yes—but Setflo is designed to help you commit to one thing at a time. You can always change your focus, but the app gently encourages you to stick with what you've chosen.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            data-testid="text-faq-title"
          >
            Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-${index}`}>
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
    </section>
  );
}
