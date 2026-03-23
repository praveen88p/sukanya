import { useEffect, useRef } from 'react';
import { Heart, Lightbulb, Users, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Heart,
    title: 'Compassionate Approach',
    description:
      'Every session is a safe space where you are heard, understood, and supported without judgment.',
  },
  {
    icon: Lightbulb,
    title: 'Clarity & Insight',
    description:
      'Gain deep understanding of your patterns and discover practical pathways to meaningful change.',
  },
  {
    icon: Users,
    title: 'Personalized Guidance',
    description:
      'Coaching tailored to your unique journey, honoring your pace and honoring your truth.',
  },
  {
    icon: Shield,
    title: 'Proven Methods',
    description:
      'Evidence-based techniques combined with spiritual wisdom for holistic transformation.',
  },
];

export function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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

      // Cards animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
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
            Why Work With Me
          </span>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-textprimary mb-6">
            A Journey of{' '}
            <span className="text-gradient-violet">Self-Discovery</span>
          </h2>
          <p className="text-textsecondary text-base lg:text-lg leading-relaxed">
            Together, we create a nurturing space where transformation happens
            naturally—guided by compassion, clarity, and unwavering support.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-violet/10 flex items-center justify-center mb-6 group-hover:bg-violet group-hover:scale-110 transition-all duration-500">
                <feature.icon
                  size={24}
                  className="text-violet group-hover:text-white transition-colors duration-500"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-textprimary mb-3">
                {feature.title}
              </h3>
              <p className="text-textsecondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
