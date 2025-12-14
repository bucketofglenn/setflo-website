import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
            data-testid="text-privacy-title"
          >
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: December 2024
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">The Short Version</h2>
              <p className="text-muted-foreground leading-relaxed">
                We don't collect, sell, or share your personal data. Your practice data
                stays on your device. That's it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Setflo is designed with privacy at its core. We follow a "Data not
                collected" philosophy:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">No personal data collection</strong>
                  : We do not collect your name, email, or any identifying information
                  through the app.
                </li>
                <li>
                  <strong className="text-foreground">No usage analytics</strong>: We
                  don't track how you use the app, what features you use, or how long you
                  spend in the app.
                </li>
                <li>
                  <strong className="text-foreground">No third-party trackers</strong>:
                  There are no advertising networks, analytics SDKs, or third-party
                  trackers in the app.
                </li>
                <li>
                  <strong className="text-foreground">No server-side storage</strong>:
                  Your practice sessions, timers, and progress are stored locally on your
                  device.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Your Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All your practice data is stored on-device. This means:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your data is yours and stays with you.</li>
                <li>
                  If you delete the app, your data is deleted (unless you've exported a
                  backup).
                </li>
                <li>
                  Export files are created only when you explicitly choose to export.
                </li>
                <li>
                  Exported files are saved to a location of your choosing (iCloud Drive,
                  Files app, etc.).
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Website</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website (setflo.io) is a static marketing site. If you choose to
                subscribe to our email updates, we'll store your email address to send you
                occasional updates about Setflo. You can unsubscribe at any time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                If we ever add analytics or change our data practices, we'll update this
                policy and make it clear what's changed. We'll always prioritize your
                privacy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related questions or requests, please contact us at{" "}
                <a
                  href="mailto:privacy@setflo.io"
                  className="text-primary font-medium hover:underline"
                  data-testid="link-privacy-email"
                >
                  privacy@setflo.io
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
