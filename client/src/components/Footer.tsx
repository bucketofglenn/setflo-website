import { Link } from "wouter";
import logoImage from "@assets/icon_1765710565012.png";

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
            <div className="flex items-center gap-2">
              <img
                src={logoImage}
                alt="Setflo"
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold tracking-tight">Setflo</span>
            </div>
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
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p
            className="text-sm text-muted-foreground text-center"
            data-testid="text-copyright"
          >
            &copy; {currentYear} Setflo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
