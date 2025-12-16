import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin, Camera } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-accent" />
              <h3 className="font-display text-2xl">
                Sadguru<span className="text-accent"> Digital</span>
              </h3>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Capturing moments from ground to sky. Professional photography and certified drone services in Nandurbar.
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
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
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
                  href="mailto:sadgurudigital@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail size={16} />
                  sadgurudigital@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone size={16} />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sadguru_digital_nandurbar/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Instagram size={16} />
                  @sadguru_digital_nandurbar
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Shop No. 108, Sairachana Plaza, Bus Stand Complex, Near Sadguru Computer & Minai Cyber Cafe, Nandurbar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} Sadguru Digital. All rights reserved.
          </p>
          <motion.a
            href="https://www.instagram.com/sadguru_digital_nandurbar/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
          >
            <Instagram size={20} />
            <span className="text-xs">Follow us on Instagram</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
