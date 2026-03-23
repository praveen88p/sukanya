import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const aboutCardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(panelRef.current, { x: '-20%', opacity: 0 });
      gsap.set(headlineRef.current?.children || [], { y: 40, opacity: 0 });
      gsap.set(ctaRef.current, { y: 25, opacity: 0 });
      gsap.set(imageRef.current, { x: '8%', scale: 0.96, opacity: 0 });
      gsap.set(aboutCardRef.current, { y: 40, opacity: 0 });

      // Load animation timeline
      const tl = gsap.timeline({ delay: 0.15 });

      tl.to(panelRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'power3.out',
      })
        .to(
          headlineRef.current?.children || [],
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.7'
        )
        .to(
          ctaRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .to(
          imageRef.current,
          {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=0.9'
        )
        .to(
          aboutCardRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-offwhite overflow-hidden pt-20"
    >
      {/* Main Content Container - Balanced 50/50 Layout */}
      <div className="relative z-10 w-full min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row">
        
        {/* Left Section - Text Area (50%) */}
        <div className="relative w-full lg:w-1/2 flex items-center">
          {/* Soft Gradient Background - More subtle and premium */}
          <div
            ref={panelRef}
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(160deg, #9B6DFF 0%, #7B3DFF 40%, #6B2DEE 100%)',
            }}
          />
          
          {/* Subtle dot pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Soft edge transition */}
          <div className="hidden lg:block absolute top-0 right-0 w-24 h-full bg-gradient-to-r from-transparent to-offwhite/80 pointer-events-none" />

          {/* Content - Better padding and spacing */}
          <div className="relative z-10 w-full px-10 sm:px-14 lg:px-16 xl:px-24 py-20 lg:py-0">
            
            {/* Headline with improved spacing and hierarchy */}
            <div ref={headlineRef} className="mb-12 lg:mb-14">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-semibold text-white uppercase tracking-[0.02em] leading-[1.15]">
                <span className="block mb-3 lg:mb-4">Clarity</span>
                <span className="block mb-3 lg:mb-4">Calm</span>
                <span className="block text-white/75 font-medium">Transformation</span>
              </h1>
            </div>

            {/* Subheadline - Better readability */}
            <p className="text-white/75 text-base lg:text-lg max-w-md mb-12 leading-[1.7]">
              Life coaching for women ready to return to themselves. Find emotional
              healing, clarity, and the confidence to create the life you deserve.
            </p>

            {/* CTA Section - Improved spacing */}
            <div ref={ctaRef} className="space-y-6">
              {/* Primary CTA - More prominent */}
              <Button
                asChild
                size="lg"
                className="bg-white text-violet hover:bg-white/95 rounded-full px-10 py-7 text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 hover:scale-[1.03] active:scale-[0.98] group"
              >
                <Link to="/contact">
                  Book a Free Discovery Call
                  <ArrowRight
                    size={18}
                    className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              </Button>

              {/* Secondary CTA - Better styled */}
              <div className="pt-1">
                <Link
                  to="/services"
                  className="text-white/60 hover:text-white text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="relative">
                    Explore how it works
                    <span className="absolute bottom-0 left-0 w-full h-px bg-white/30 group-hover:bg-white/60 transition-colors" />
                  </span>
                  <ArrowRight 
                    size={14} 
                    className="transition-transform duration-300 group-hover:translate-x-1.5" 
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image Area (50%) */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center bg-offwhite overflow-hidden">
          {/* Soft background accents */}
          <div className="absolute inset-0 bg-gradient-to-bl from-violet/[0.03] via-transparent to-lavender/30" />
          
          {/* Decorative soft circles */}
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet/[0.04] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-violet/[0.06] rounded-full blur-2xl" />

          {/* Image Container - Better sizing and alignment */}
          <div className="relative z-10 w-full px-10 sm:px-14 lg:px-10 xl:px-16 py-16 lg:py-0">
            <div
              ref={imageRef}
              className="relative mx-auto lg:mx-0 max-w-md lg:max-w-lg xl:max-w-md"
            >
              {/* Main Image with enhanced shadow */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(123,45,255,0.18)]">
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Sukanya Debnath - Life Coach"
                  className="w-full aspect-[3/4] object-cover"
                />
                
                {/* Subtle bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/8 to-transparent" />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-violet/8 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-violet/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* About Card - Refined positioning and styling */}
      <div
        ref={aboutCardRef}
        className="absolute bottom-10 lg:bottom-14 right-8 lg:right-14 z-20 w-[calc(100%-4rem)] max-w-[340px]"
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_16px_48px_-8px_rgba(0,0,0,0.12)] p-6 border border-gray-100/80">
          <div className="flex items-center gap-2.5 mb-3.5">
            <div className="w-7 h-7 rounded-lg bg-violet/10 flex items-center justify-center">
              <Sparkles size={14} className="text-violet" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-violet">
              About Sukanya
            </span>
          </div>
          <p className="text-textsecondary text-sm leading-[1.7] mb-4">
            I help women slow down, trust themselves, and build a life that feels
            like home. With compassion and clarity, we transform together.
          </p>
          <Link
            to="/about"
            className="text-violet hover:text-violet-dark text-sm font-medium transition-colors duration-300 inline-flex items-center gap-1.5 group"
          >
            More about me
            <ArrowRight 
              size={14} 
              className="transition-transform duration-300 group-hover:translate-x-1.5" 
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
