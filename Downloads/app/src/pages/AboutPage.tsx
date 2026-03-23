import { useEffect, useRef } from 'react';
import { Award, Heart, Lightbulb, Users, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  'ICF Certified Professional Coach (CPC)',
  'Emotional Intelligence Practitioner',
  'Mindfulness-Based Stress Reduction (MBSR)',
  'NLP Master Practitioner',
  'Yoga & Meditation Teacher (RYT-500)',
];

const philosophyPoints = [
  {
    icon: Heart,
    title: 'Compassion First',
    description:
      'Every journey begins with self-compassion. I believe in meeting you exactly where you are, with unconditional acceptance and understanding.',
  },
  {
    icon: Lightbulb,
    title: 'Clarity Through Inquiry',
    description:
      'Powerful questions lead to profound insights. Together, we explore the depths of your thoughts and feelings to uncover your truth.',
  },
  {
    icon: Users,
    title: 'Partnership in Growth',
    description:
      'Coaching is a collaborative journey. I walk beside you as a guide, supporter, and mirror—reflecting your inherent wisdom back to you.',
  },
];

export function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        heroRef.current?.querySelectorAll('.animate-item') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );

      // Story section
      gsap.fromTo(
        storyRef.current?.querySelectorAll('.story-item') || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Philosophy cards
      gsap.fromTo(
        philosophyRef.current?.querySelectorAll('.philosophy-card') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Certifications
      gsap.fromTo(
        certsRef.current?.querySelectorAll('.cert-item') || [],
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: certsRef.current,
            start: 'top 80%',
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
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <div className="w-full lg:w-2/5 animate-item">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-card">
                  <img
                    src="/images/coach-about.jpg"
                    alt="Sukanya Debnath - Life Coach"
                    className="w-full h-[450px] lg:h-[600px] object-cover object-top"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-violet/20 rounded-full blur-2xl" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-violet/30 rounded-full blur-xl" />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-3/5">
              <span className="animate-item text-violet text-xs font-semibold uppercase tracking-wider mb-4 block">
                About Me
              </span>
              <h1 className="animate-item font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-textprimary mb-6">
                Hi, I&apos;m{' '}
                <span className="text-gradient-violet">Sukanya</span>
              </h1>
              <div className="animate-item space-y-4 text-textsecondary text-base lg:text-lg leading-relaxed mb-8">
                <p>
                  I am a certified life coach, emotional wellness practitioner,
                  and spiritual guide dedicated to helping women navigate life&apos;s
                  complexities with grace, clarity, and confidence.
                </p>
                <p>
                  My journey into coaching began from my own experience of
                  transformation. After years of feeling lost in the expectations
                  of others, I embarked on a path of self-discovery that led me
                  to my true calling—guiding other women back to themselves.
                </p>
                <p>
                  Today, I combine evidence-based coaching methodologies with
                  ancient spiritual wisdom to create a holistic approach that
                  honors both the practical and the profound aspects of personal
                  growth.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="animate-item flex flex-wrap gap-8">
                <div>
                  <p className="font-display text-3xl font-bold text-violet">10+</p>
                  <p className="text-textsecondary text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-violet">500+</p>
                  <p className="text-textsecondary text-sm">Women Guided</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-violet">5</p>
                  <p className="text-textsecondary text-sm">Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section ref={storyRef} className="w-full py-24 lg:py-32 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="story-item text-violet text-xs font-semibold uppercase tracking-wider mb-4 block text-center">
              My Journey
            </span>
            <h2 className="story-item font-display text-3xl lg:text-4xl font-bold text-textprimary mb-8 text-center">
              The Path That Led Me <span className="text-gradient-violet">Here</span>
            </h2>

            <div className="story-item space-y-6 text-textsecondary text-base lg:text-lg leading-relaxed">
              <p>
                There was a time in my life when I had everything that should have
                made me happy—a successful career, a loving family, and all the
                external markers of success. Yet, I felt an inexplicable emptiness,
                a sense that I was living someone else&apos;s life.
              </p>
              <p>
                The turning point came during a particularly challenging period
                when I found myself at a crossroads. It was then that I began my
                deep dive into self-discovery—studying psychology, practicing
                meditation, and working with mentors who helped me see my own
                patterns and potential.
              </p>
              <p>
                As I healed and grew, I discovered my passion for guiding others
                through similar transformations. I pursued formal training,
                earning certifications in life coaching, emotional intelligence,
                and mindfulness practices. Each qualification was not just a
                credential, but a step deeper into understanding the human
                experience.
              </p>
              <p>
                Today, my work is my calling. Every woman I coach reminds me of
                my own journey—the fears, the hopes, the breakthroughs. And every
                transformation I witness reaffirms my belief that we all have
                within us the wisdom to create lives of meaning and joy.
              </p>
            </div>

            {/* Quote */}
            <div className="story-item mt-12 bg-lavender rounded-3xl p-8 lg:p-12 relative">
              <Quote
                size={40}
                className="text-violet/30 absolute top-6 left-6"
              />
              <blockquote className="relative z-10 text-textprimary text-xl lg:text-2xl font-medium text-center italic leading-relaxed">
                &ldquo;My mission is to help every woman who sits across from me
                remember who she truly is—powerful, worthy, and capable of
                creating a life she loves.&rdquo;
              </blockquote>
              <p className="text-center text-violet font-semibold mt-4">
                — Sukanya Debnath
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section ref={philosophyRef} className="w-full py-24 lg:py-32 bg-offwhite">
        <div className="w-full px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-violet text-xs font-semibold uppercase tracking-wider mb-4 block">
              My Approach
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-textprimary mb-6">
              Coaching <span className="text-gradient-violet">Philosophy</span>
            </h2>
            <p className="text-textsecondary text-base lg:text-lg leading-relaxed">
              My approach is rooted in three core principles that guide every
              session and every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className="philosophy-card bg-white rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-violet/10 flex items-center justify-center mb-6">
                  <point.icon size={28} className="text-violet" />
                </div>
                <h3 className="font-display text-xl font-semibold text-textprimary mb-4">
                  {point.title}
                </h3>
                <p className="text-textsecondary text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section ref={certsRef} className="w-full py-24 lg:py-32 bg-lavender">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <span className="cert-item text-violet text-xs font-semibold uppercase tracking-wider mb-4 block">
                Credentials
              </span>
              <h2 className="cert-item font-display text-3xl lg:text-4xl font-bold text-textprimary mb-6">
                Certifications &{' '}
                <span className="text-gradient-violet">Experience</span>
              </h2>
              <p className="cert-item text-textsecondary text-base lg:text-lg leading-relaxed mb-8">
                My qualifications reflect a commitment to excellence and a deep
                dedication to the craft of coaching. Each certification represents
                hundreds of hours of training and practice.
              </p>

              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="cert-item flex items-center gap-4 bg-white rounded-xl p-4 shadow-soft"
                  >
                    <div className="w-10 h-10 rounded-full bg-violet/10 flex items-center justify-center flex-shrink-0">
                      <Award size={18} className="text-violet" />
                    </div>
                    <span className="text-textprimary font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src="/images/worth-standing.jpg"
                  alt="Sukanya Debnath - Professional Life Coach"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
