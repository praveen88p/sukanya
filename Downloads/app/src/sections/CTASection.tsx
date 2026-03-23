import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-offwhite overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-transparent to-violet/10" />

      <div className="relative w-full px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div ref={contentRef} className="w-full lg:w-1/2">
            <span className="text-violet text-xs font-semibold uppercase tracking-wider mb-4 block">
              Start Your Journey
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-textprimary mb-6">
              Ready to Create the Life{' '}
              <span className="text-gradient-violet">You Deserve?</span>
            </h2>
            <p className="text-textsecondary text-base lg:text-lg leading-relaxed mb-8">
              Take the first step towards clarity, calm, and transformation.
              Book a free discovery call where we will explore your goals, discuss
              how coaching can help, and determine if we are the right fit for
              each other—no pressure, just a conversation.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-violet hover:bg-violet-dark text-white rounded-full px-8 py-6 text-sm font-semibold transition-all duration-300 hover:shadow-lg group"
              >
                <Link to="/contact">
                  <Phone size={18} className="mr-2" />
                  Book Free Discovery Call
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-violet text-violet hover:bg-violet hover:text-white rounded-full px-8 py-6 text-sm font-semibold transition-all duration-300"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-textsecondary text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>30-minute session</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Online via Zoom</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src="/images/booking-backview.jpg"
                alt="Begin your transformation journey"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-textprimary font-medium mb-2">
                  &ldquo;The journey of a thousand miles begins with a single step.&rdquo;
                </p>
                <p className="text-textsecondary text-sm">— Lao Tzu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
