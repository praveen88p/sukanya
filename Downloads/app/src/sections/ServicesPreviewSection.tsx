import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Brain,
    title: 'Emotional Clarity & Stress Management',
    description:
      'Untangle overwhelming emotions and develop practical tools to navigate stress with grace and resilience.',
    color: 'bg-violet/10',
    iconColor: 'text-violet',
  },
  {
    icon: Heart,
    title: 'Self-Worth & Inner Healing',
    description:
      'Release limiting beliefs and cultivate deep self-acceptance. You are already enough—let us help you believe it.',
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: Sparkles,
    title: 'Spiritual Intelligence',
    description:
      'Connect with your inner wisdom, discover your purpose, and align your daily life with your deepest values.',
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
];

export function ServicesPreviewSection() {
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
          { y: 50, opacity: 0 },
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
      className="relative w-full py-24 lg:py-32 bg-lavender"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Section Header */}
        <div ref={titleRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-violet text-xs font-semibold uppercase tracking-wider mb-4 block">
              Services
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-textprimary mb-4">
              Coaching for{' '}
              <span className="text-gradient-violet">Real Life</span>
            </h2>
            <p className="text-textsecondary text-base lg:text-lg leading-relaxed">
              Problem-based coaching areas designed to meet you where you are
              and guide you to where you want to be.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-violet text-violet hover:bg-violet hover:text-white rounded-full px-6 py-5 text-sm font-medium transition-all duration-300 group w-fit"
          >
            <Link to="/services">
              View All Services
              <ArrowRight
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>

        {/* Service Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
              >
                <service.icon
                  size={28}
                  className={`${service.iconColor}`}
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-textprimary mb-4">
                {service.title}
              </h3>
              <p className="text-textsecondary text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-violet hover:text-violet-dark text-sm font-medium transition-colors duration-300"
              >
                Learn more
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
