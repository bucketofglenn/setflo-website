import { Link } from "wouter";
import { SiInstagram } from "react-icons/si";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
  { href: "/press", label: "Press" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-xl font-bold tracking-tight">Setflo</span>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Do one thing well. A single-focus practice timer for mastery.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <a
              href="https://instagram.com/setflo.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-instagram"
            >
              <SiInstagram className="h-4 w-4" />
              @setflo.io
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center" data-testid="text-copyright">
            &copy; {currentYear} Setflo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
