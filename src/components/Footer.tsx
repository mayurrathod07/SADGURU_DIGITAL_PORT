import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin, Camera, Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              <h3 className="font-display text-xl sm:text-2xl">
                Sadguru<span className="text-accent"> Digital</span>
              </h3>
            </div>
            <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed max-w-xs mb-2">
              Professional Photography & Drone Shoots
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm italic">
              "Capturing stories from every angle."
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
                  href="mailto:Sadgurudigitalnandurbar01@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail size={16} />
                  Sadgurudigitalnandurbar01@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919021128321"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone size={16} />
                  +91 90211 28321
                </a>
              </li>
              <li>
                <a
                  href="tel:+918080544106"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone size={16} />
                  +91 80805 44106
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

        <div className="border-t border-primary-foreground/10 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/50 text-xs">
                © {new Date().getFullYear()} Sadguru Digital. All Rights Reserved.
              </p>
              <p className="text-primary-foreground/40 text-xs mt-1">
                Created by <span className="text-accent">Mayur Rathod</span>
              </p>
            </div>
            <motion.a
              href="https://www.instagram.com/sadguru_digital_nandurbar/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-xs sm:text-sm"
            >
              <Instagram size={18} className="sm:w-5 sm:h-5" />
              <span className="text-xs">Follow us on Instagram</span>
            </motion.a>
          </div>

          {/* Developer Advertisement */}
          <div className="border-t border-primary-foreground/10 pt-4 sm:pt-6">
            <div className="bg-primary-foreground/5 rounded-lg p-3 sm:p-4 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <p className="text-primary-foreground/80 text-xs sm:text-sm font-medium">
                    Need a website? Contact the developer
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <motion.a
                    href="https://www.instagram.com/mayur.ratho.d/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-accent transition-colors text-xs"
                  >
                    <Instagram size={14} className="sm:w-4 sm:h-4" />
                    <span>Instagram</span>
                    <ExternalLink size={12} className="sm:w-3 sm:h-3" />
                  </motion.a>
                  <motion.a
                    href="https://mayurathod.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-accent transition-colors text-xs"
                  >
                    <span>Portfolio</span>
                    <ExternalLink size={12} className="sm:w-3 sm:h-3" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};