import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  { name: 'Life Coaching', href: '/services' },
  { name: 'Emotional Healing', href: '/services' },
  { name: 'Clarity Sessions', href: '/services' },
  { name: 'Spiritual Intelligence', href: '/services' },
];

export function Footer() {
  return (
    <footer className="bg-textprimary text-white">
      <div className="w-full px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold tracking-tight">
                Sukanya Debnath
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Life coaching for women ready to return to themselves. Find clarity, 
              calm, and transformation through compassionate guidance.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:hello@sukanyadebnath.co"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-violet transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-violet-light mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@sukanyadebnath.co"
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                >
                  hello@sukanyadebnath.co
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-violet-light mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-violet-light mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Based in India<br />
                  Sessions online worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Sukanya Debnath. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-white/50 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-white/50 hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
