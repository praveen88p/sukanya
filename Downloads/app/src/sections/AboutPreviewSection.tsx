import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  'Certified Life Coach (ICF Accredited)',
  '10+ Years of Coaching Experience',
  'Emotional Intelligence Practitioner',
  'Mindfulness & Meditation Teacher',
];

export function AboutPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -60, opacity: 0 },
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

      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
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
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet/5 to-transparent" />

      <div className="relative w-full px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div ref={imageRef} className="w-full lg:w-1/2">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img
                  src="/images/coaching-seated.jpg"
                  alt="Sukanya Debnath - Life Coach"
                  className="w-full h-[400px] lg:h-[550px] object-cover"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-violet text-white rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <Award size={32} />
                  <div>
                    <p className="text-2xl font-bold">10+</p>
                    <p className="text-sm text-white/80">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="w-full lg:w-1/2">
            <span className="text-violet text-xs font-semibold uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-textprimary mb-6">
              Guiding Women to Their{' '}
              <span className="text-gradient-violet">True Selves</span>
            </h2>
            <p className="text-textsecondary text-base lg:text-lg leading-relaxed mb-6">
              I am Sukanya Debnath, a certified life coach dedicated to helping
              women navigate life&apos;s transitions with grace and confidence. My
              approach blends evidence-based coaching techniques with spiritual
              wisdom, creating a holistic path to transformation.
            </p>
            <p className="text-textsecondary text-base leading-relaxed mb-8">
              Having walked my own journey of self-discovery, I understand the
              courage it takes to seek change. My mission is to create a safe,
              nurturing space where you can explore, heal, and grow into the
              woman you are meant to be.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-violet flex-shrink-0" />
                  <span className="text-textprimary text-sm">{credential}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-violet hover:bg-violet-dark text-white rounded-full px-8 py-6 text-sm font-semibold transition-all duration-300 hover:shadow-lg group"
            >
              <Link to="/about">
                Read My Story
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
