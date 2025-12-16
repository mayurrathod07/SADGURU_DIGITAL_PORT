import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl mb-4">
              AETHER<span className="text-accent">.</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Capturing moments from ground to sky. Professional photography and certified drone services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Portfolio", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@aether.studio"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail size={16} />
                  hello@aether.studio
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone size={16} />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Instagram size={16} />
                  @aether.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} Aether Studio. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-xs">
            FAA Part 107 Certified Drone Operations
          </p>
        </div>
      </div>
    </footer>
  );
};
