import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Heart,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Clock,
  Video,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const coreAreas = [
  {
    icon: Brain,
    title: 'Emotional Clarity & Stress Management',
    description:
      'Navigate overwhelming emotions and develop practical tools to manage stress with grace. Learn to identify triggers, regulate your nervous system, and respond to challenges from a place of calm.',
    benefits: [
      'Identify and understand emotional patterns',
      'Develop stress regulation techniques',
      'Build resilience during difficult times',
      'Create healthy coping mechanisms',
    ],
    color: 'bg-violet',
  },
  {
    icon: Heart,
    title: 'Self-Worth & Inner Healing',
    description:
      'Release limiting beliefs and cultivate deep self-acceptance. Heal past wounds and discover the freedom that comes from knowing you are inherently worthy of love and success.',
    benefits: [
      'Release self-doubt and limiting beliefs',
      'Heal from past traumas and disappointments',
      'Build authentic self-confidence',
      'Practice self-compassion daily',
    ],
    color: 'bg-rose-500',
  },
  {
    icon: Sparkles,
    title: 'Spiritual Intelligence',
    description:
      'Connect with your inner wisdom and align your daily life with your deepest values. Discover purpose, meaning, and a sense of connection that transcends the material.',
    benefits: [
      'Clarify your core values and life purpose',
      'Develop a personal spiritual practice',
      'Find meaning in everyday experiences',
      'Align actions with inner truth',
    ],
    color: 'bg-amber-500',
  },
];

const programs = [
  {
    title: 'Free Discovery Session',
    price: 'Free',
    duration: '30 minutes',
    description:
      'A no-pressure conversation to explore your goals, discuss how coaching works, and determine if we are the right fit for each other.',
    features: [
      'Clarify your current challenges',
      'Explore coaching approach',
      'Ask questions about the process',
      'No commitment required',
    ],
    icon: MessageCircle,
    highlighted: false,
  },
  {
    title: '1:1 Life Coaching Program',
    price: 'Custom Pricing',
    duration: '12 weeks',
    description:
      'A comprehensive coaching journey designed to create lasting transformation in your life, relationships, and sense of self.',
    features: [
      'Weekly 60-minute coaching sessions',
      'Personalized action plans',
      'Email support between sessions',
      'Guided exercises and resources',
      'Progress tracking and accountability',
      'Lifetime access to tools',
    ],
    icon: Video,
    highlighted: true,
  },
];

export function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
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

      // Core areas
      gsap.fromTo(
        areasRef.current?.querySelectorAll('.area-card') || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: areasRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Programs
      gsap.fromTo(
        programsRef.current?.querySelectorAll('.program-card') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: programsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-offwhite pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full py-20 lg:py-28 bg-gradient-to-br from-violet/10 via-offwhite to-lavender"
      >
        <div className="w-full px-6 lg:px-12 text-center">
          <span className="hero-item text-violet text-xs font-semibold uppercase tracking-wider mb-4 block">
            Services
          </span>
          <h1 className="hero-item font-display text-3xl lg:text-5xl xl:text-6xl font-bold text-textprimary mb-6 max-w-4xl mx-auto">
            Coaching for{' '}
            <span className="text-gradient-violet">Transformation</span>
          </h1>
          <p className="hero-item text-textsecondary text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Every journey is unique. My coaching services are designed to meet
            you where you are and guide you toward the life you truly desire.
          </p>
          <div className="hero-item flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-violet hover:bg-violet-dark text-white rounded-full px-8 py-6 text-sm font-semibold transition-all duration-300 hover:shadow-lg"
            >
              <Link to="/contact">Book a Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Coaching Areas */}
      <section ref={areasRef} className="w-full py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-violet text-xs font-semibold uppercase tracking-wider mb-4 block">
              Core Areas
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-textprimary mb-6">
              How I Can <span className="text-gradient-violet">Help You</span>
            </h2>
            <p className="text-textsecondary text-base lg:text-lg leading-relaxed">
              Problem-based coaching areas designed to address the specific
              challenges you are facing and guide you toward lasting change.
            </p>
          </div>

          <div className="space-y-8">
            {coreAreas.map((area, index) => (
              <div
                key={index}
                className="area-card bg-offwhite rounded-3xl p-8 lg:p-12 shadow-soft hover:shadow-card transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 rounded-2xl ${area.color} flex items-center justify-center`}
                    >
                      <area.icon size={36} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-textprimary mb-4">
                      {area.title}
                    </h3>
                    <p className="text-textsecondary text-base lg:text-lg leading-relaxed mb-6">
                      {area.description}
                    </p>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {area.benefits.map((benefit, bIndex) => (
                        <div
                          key={bIndex}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle
                            size={18}
                            className="text-violet flex-shrink-0"
                          />
                          <span className="text-textprimary text-sm">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Programs */}
      <section ref={programsRef} className="w-full py-24 lg:py-32 bg-lavender">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-violet text-xs font-semibold uppercase tracking-wider mb-4 block">
              Programs
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-textprimary mb-6">
              Choose Your{' '}
              <span className="text-gradient-violet">Path</span>
            </h2>
            <p className="text-textsecondary text-base lg:text-lg leading-relaxed">
              From a complimentary discovery call to a comprehensive coaching
              program, find the option that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`program-card rounded-3xl p-8 lg:p-10 transition-all duration-500 ${
                  program.highlighted
                    ? 'bg-violet text-white shadow-card'
                    : 'bg-white shadow-soft hover:shadow-card'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      program.highlighted
                        ? 'bg-white/20'
                        : 'bg-violet/10'
                    }`}
                  >
                    <program.icon
                      size={24}
                      className={
                        program.highlighted ? 'text-white' : 'text-violet'
                      }
                    />
                  </div>
                  {program.highlighted && (
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Title & Price */}
                <h3
                  className={`font-display text-2xl font-semibold mb-2 ${
                    program.highlighted ? 'text-white' : 'text-textprimary'
                  }`}
                >
                  {program.title}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`font-display text-3xl font-bold ${
                      program.highlighted ? 'text-white' : 'text-violet'
                    }`}
                  >
                    {program.price}
                  </span>
                  <span
                    className={`flex items-center gap-1 text-sm ${
                      program.highlighted
                        ? 'text-white/80'
                        : 'text-textsecondary'
                    }`}
                  >
                    <Clock size={14} />
                    {program.duration}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    program.highlighted
                      ? 'text-white/80'
                      : 'text-textsecondary'
                  }`}
                >
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className={`flex-shrink-0 mt-0.5 ${
                          program.highlighted
                            ? 'text-white'
                            : 'text-violet'
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          program.highlighted
                            ? 'text-white/90'
                            : 'text-textprimary'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full rounded-full py-6 text-sm font-semibold transition-all duration-300 group ${
                    program.highlighted
                      ? 'bg-white text-violet hover:bg-white/90'
                      : 'bg-violet text-white hover:bg-violet-dark'
                  }`}
                >
                  <Link to="/contact">
                    {program.highlighted ? 'Get Started' : 'Book Free Call'}
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-textsecondary text-sm mb-4">
              Not sure which option is right for you?
            </p>
            <Button
              asChild
              variant="outline"
              className="border-violet text-violet hover:bg-violet hover:text-white rounded-full px-6 py-5 text-sm font-medium transition-all duration-300"
            >
              <Link to="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
