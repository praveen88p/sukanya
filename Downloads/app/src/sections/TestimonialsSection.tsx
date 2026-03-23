import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Sukanya helped me find clarity during the most confusing phase of my life. Her compassionate guidance gave me the courage to make decisions aligned with my true self.",
    name: 'Priya Sharma',
    role: 'Marketing Director',
    location: 'Mumbai',
  },
  {
    quote:
      "Working with Sukanya was transformative. She didn't just listen—she helped me understand myself better. I finally feel at peace with who I am.",
    name: 'Ananya Patel',
    role: 'Entrepreneur',
    location: 'Bangalore',
  },
  {
    quote:
      "The stress management techniques I learned have changed my daily life. I handle pressure with so much more grace now. Forever grateful for this journey.",
    name: 'Meera Reddy',
    role: 'Healthcare Professional',
    location: 'Hyderabad',
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-offwhite"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Section Header */}
        <div ref={titleRef} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-violet text-xs font-semibold uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-textprimary mb-6">
            Stories of{' '}
            <span className="text-gradient-violet">Transformation</span>
          </h2>
          <p className="text-textsecondary text-base lg:text-lg leading-relaxed">
            Hear from women who have embarked on their journey of self-discovery
            and emerged stronger, clearer, and more aligned with their true selves.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-violet/10 flex items-center justify-center">
                <Quote size={18} className="text-violet" />
              </div>

              {/* Quote Text */}
              <p className="text-textprimary text-base leading-relaxed mb-8 pt-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet to-violet-light flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-textprimary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-textsecondary text-xs">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
