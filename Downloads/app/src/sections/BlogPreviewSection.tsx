import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    image: '/images/blog-1.jpg',
    title: '5 Morning Rituals to Start Your Day with Intention',
    excerpt:
      'Discover simple practices that can transform your mornings and set a positive tone for the entire day.',
    date: 'Dec 15, 2024',
    category: 'Mindfulness',
  },
  {
    image: '/images/blog-2.jpg',
    title: 'Finding Peace in the Midst of Chaos',
    excerpt:
      'Learn practical techniques to maintain inner calm even when life feels overwhelming and uncertain.',
    date: 'Dec 10, 2024',
    category: 'Emotional Wellness',
  },
  {
    image: '/images/blog-3.jpg',
    title: 'The Journey to Self-Worth: A Personal Story',
    excerpt:
      'My own path to recognizing my inherent value and how it changed every aspect of my life.',
    date: 'Dec 5, 2024',
    category: 'Personal Growth',
  },
];

export function BlogPreviewSection() {
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
              Blog
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-textprimary mb-4">
              Insights for{' '}
              <span className="text-gradient-violet">Inner Growth</span>
            </h2>
            <p className="text-textsecondary text-base lg:text-lg leading-relaxed">
              Explore articles on mindfulness, emotional wellness, and personal
              development to support your journey.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-violet text-violet hover:bg-violet hover:text-white rounded-full px-6 py-5 text-sm font-medium transition-all duration-300 group w-fit"
          >
            <Link to="/blog">
              View All Articles
              <ArrowRight
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>

        {/* Blog Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-violet text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-textsecondary text-xs mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-textprimary mb-3 line-clamp-2 group-hover:text-violet transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-textsecondary text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-violet hover:text-violet-dark text-sm font-medium transition-colors duration-300"
                >
                  Read More
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
