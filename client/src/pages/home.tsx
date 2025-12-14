import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PhilosophySection from "@/components/PhilosophySection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItFeelsSection from "@/components/HowItFeelsSection";
import UseCasesSection from "@/components/UseCasesSection";
import FAQSection from "@/components/FAQSection";
import EmailCaptureSection from "@/components/EmailCaptureSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <PhilosophySection />
        <FeaturesSection />
        <HowItFeelsSection />
        <UseCasesSection />
        <FAQSection />
        <EmailCaptureSection />
      </main>
      <Footer />
    </div>
  );
}
