import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <span className="font-display text-xl font-bold text-textprimary tracking-tight">
                Sukanya Debnath
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(link.href)
                      ? 'text-violet'
                      : 'text-textsecondary hover:text-textprimary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-violet hover:bg-violet-dark text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:shadow-lg"
              >
                <Link to="/contact">Book Free Discovery Call</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-textprimary"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 bg-white shadow-card transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'text-violet'
                    : 'text-textsecondary hover:text-textprimary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-violet hover:bg-violet-dark text-white rounded-full py-3 text-sm font-medium"
            >
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Book Free Discovery Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
