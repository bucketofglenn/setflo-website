import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
            data-testid="text-terms-title"
          >
            Terms of Use
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: December 2024
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                By downloading or using Setflo, you agree to these terms. If you don't
                agree, please don't use the app.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">The App</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Setflo is a practice timer app designed to help you track time spent on a
                single focus area. The app:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Is provided "as is" without warranties of any kind.</li>
                <li>May be updated, modified, or discontinued at any time.</li>
                <li>Is not intended to replace professional advice or guidance.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Not Medical Advice</h2>
              <p className="text-muted-foreground leading-relaxed">
                Setflo is not a medical device and should not be used as a substitute for
                professional medical advice, diagnosis, or treatment. If you're using
                Setflo for rehabilitation, physical therapy, or any health-related
                practice, please consult with your healthcare provider.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Your Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Backing up your data</strong>: Use
                  the export feature to create backups. We cannot recover lost data.
                </li>
                <li>
                  <strong className="text-foreground">Using the app appropriately</strong>
                  : Don't use Setflo for anything illegal or harmful.
                </li>
                <li>
                  <strong className="text-foreground">Your device</strong>: Keeping your
                  device secure and updated.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Setflo and its creators shall not
                be liable for any indirect, incidental, special, consequential, or
                punitive damages, including loss of data, arising from your use of the
                app.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these terms from time to time. Continued use of the app
                after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For legal inquiries, please contact us at{" "}
                <a
                  href="mailto:legal@setflo.io"
                  className="text-primary font-medium hover:underline"
                  data-testid="link-legal-email"
                >
                  legal@setflo.io
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
