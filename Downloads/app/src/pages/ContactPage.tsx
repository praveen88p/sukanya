import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current?.querySelectorAll('.hero-item') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        formRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        infoRef.current?.querySelectorAll('.info-item') || [],
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-offwhite pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full py-20 lg:py-28 bg-gradient-to-br from-violet/10 via-offwhite to-lavender"
      >
        <div className="w-full px-6 lg:px-12 text-center">
          <span className="hero-item text-violet text-xs font-semibold uppercase tracking-wider mb-4 block">
            Contact
          </span>
          <h1 className="hero-item font-display text-3xl lg:text-5xl xl:text-6xl font-bold text-textprimary mb-6 max-w-4xl mx-auto">
            Let&apos;s Start a{' '}
            <span className="text-gradient-violet">Conversation</span>
          </h1>
          <p className="hero-item text-textsecondary text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you are ready to begin your coaching journey or simply have
            questions, I would love to hear from you. Reach out and let us
            connect.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Form */}
            <div ref={formRef} className="w-full lg:w-3/5">
              <div className="bg-offwhite rounded-3xl p-8 lg:p-12">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-textprimary mb-2">
                  Send a Message
                </h2>
                <p className="text-textsecondary text-sm mb-8">
                  Fill out the form below and I will get back to you within 24
                  hours.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-green-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-green-700 text-sm">
                      Thank you for reaching out. I will be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-textprimary text-sm font-medium"
                        >
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-white border-0 rounded-xl h-12 text-textprimary placeholder:text-textsecondary/50 focus:ring-2 focus:ring-violet"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-textprimary text-sm font-medium"
                        >
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-white border-0 rounded-xl h-12 text-textprimary placeholder:text-textsecondary/50 focus:ring-2 focus:ring-violet"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-textprimary text-sm font-medium"
                      >
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me what you are navigating..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-white border-0 rounded-xl text-textprimary placeholder:text-textsecondary/50 focus:ring-2 focus:ring-violet resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-violet hover:bg-violet-dark text-white rounded-full py-6 text-sm font-semibold transition-all duration-300 hover:shadow-lg group"
                    >
                      <Send
                        size={16}
                        className="mr-2 transition-transform group-hover:translate-x-1"
                      />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div ref={infoRef} className="w-full lg:w-2/5">
              <div className="space-y-6">
                {/* Discovery Call Card */}
                <div className="info-item bg-violet rounded-3xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <Video size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">
                        Book a Discovery Call
                      </h3>
                      <p className="text-white/80 text-sm">
                        Free 30-minute session
                      </p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mb-6">
                    Let us explore your goals and see how coaching can help you
                    create the life you deserve.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-white text-violet hover:bg-white/90 rounded-full py-5 text-sm font-semibold transition-all duration-300"
                  >
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule Your Call
                    </a>
                  </Button>
                </div>

                {/* Contact Details */}
                <div className="info-item bg-offwhite rounded-3xl p-8">
                  <h3 className="font-display text-lg font-semibold text-textprimary mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:hello@sukanyadebnath.co"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet transition-colors duration-300">
                        <Mail
                          size={18}
                          className="text-violet group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <p className="text-textsecondary text-xs mb-1">Email</p>
                        <p className="text-textprimary font-medium">
                          hello@sukanyadebnath.co
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+919876543210"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet transition-colors duration-300">
                        <Phone
                          size={18}
                          className="text-violet group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <p className="text-textsecondary text-xs mb-1">Phone</p>
                        <p className="text-textprimary font-medium">
                          +91 98765 43210
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={18} className="text-violet" />
                      </div>
                      <div>
                        <p className="text-textsecondary text-xs mb-1">
                          Location
                        </p>
                        <p className="text-textprimary font-medium">
                          Based in India
                        </p>
                        <p className="text-textsecondary text-sm">
                          Sessions online worldwide
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center flex-shrink-0">
                        <Clock size={18} className="text-violet" />
                      </div>
                      <div>
                        <p className="text-textsecondary text-xs mb-1">
                          Response Time
                        </p>
                        <p className="text-textprimary font-medium">
                          Within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
