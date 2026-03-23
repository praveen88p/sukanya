import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, Tag } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    image: '/images/blog-1.jpg',
    title: '5 Morning Rituals to Start Your Day with Intention',
    excerpt:
      'Discover simple practices that can transform your mornings and set a positive tone for the entire day. From meditation to journaling, these rituals will help you begin each day with clarity and purpose.',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    category: 'Mindfulness',
    featured: true,
  },
  {
    image: '/images/blog-2.jpg',
    title: 'Finding Peace in the Midst of Chaos',
    excerpt:
      'Learn practical techniques to maintain inner calm even when life feels overwhelming and uncertain. Discover how to anchor yourself in the present moment.',
    date: 'Dec 10, 2024',
    readTime: '7 min read',
    category: 'Emotional Wellness',
    featured: false,
  },
  {
    image: '/images/blog-3.jpg',
    title: 'The Journey to Self-Worth: A Personal Story',
    excerpt:
      'My own path to recognizing my inherent value and how it changed every aspect of my life. A raw and honest account of transformation.',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
    category: 'Personal Growth',
    featured: false,
  },
  {
    image: '/images/healing-flower.jpg',
    title: 'Healing from Within: The Power of Self-Compassion',
    excerpt:
      'Why being kind to yourself is not selfish—it is essential. Learn how self-compassion can accelerate your healing journey.',
    date: 'Nov 28, 2024',
    readTime: '6 min read',
    category: 'Emotional Healing',
    featured: false,
  },
  {
    image: '/images/clarity-window.jpg',
    title: 'Creating Clarity When Everything Feels Unclear',
    excerpt:
      'Practical steps to find direction when you are feeling lost. How to quiet the noise and hear your inner wisdom.',
    date: 'Nov 20, 2024',
    readTime: '8 min read',
    category: 'Clarity',
    featured: false,
  },
  {
    image: '/images/spiritual-profile.jpg',
    title: 'Spiritual Practices for Modern Life',
    excerpt:
      'Integrating ancient wisdom into your daily routine. Simple practices that can transform your relationship with yourself and the world.',
    date: 'Nov 15, 2024',
    readTime: '6 min read',
    category: 'Spiritual Intelligence',
    featured: false,
  },
];

const categories = [
  'All',
  'Mindfulness',
  'Emotional Wellness',
  'Personal Growth',
  'Emotional Healing',
  'Clarity',
  'Spiritual Intelligence',
];

export function BlogPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

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
        postsRef.current?.querySelectorAll('.blog-card') || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: postsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="min-h-screen bg-offwhite pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full py-20 lg:py-28 bg-gradient-to-br from-violet/10 via-offwhite to-lavender"
      >
        <div className="w-full px-6 lg:px-12 text-center">
          <span className="hero-item text-violet text-xs font-semibold uppercase tracking-wider mb-4 block">
            Blog
          </span>
          <h1 className="hero-item font-display text-3xl lg:text-5xl xl:text-6xl font-bold text-textprimary mb-6 max-w-4xl mx-auto">
            Insights for{' '}
            <span className="text-gradient-violet">Inner Growth</span>
          </h1>
          <p className="hero-item text-textsecondary text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Explore articles on mindfulness, emotional wellness, and personal
            development to support your journey of transformation.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="w-full py-16 lg:py-24 bg-white">
          <div className="w-full px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <span className="text-violet text-xs font-semibold uppercase tracking-wider mb-6 block">
                Featured Article
              </span>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="w-full lg:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-card h-64 lg:h-96">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-violet/10 text-violet text-xs font-semibold px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1 text-textsecondary text-xs">
                      <Calendar size={12} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1 text-textsecondary text-xs">
                      <Clock size={12} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-textprimary mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-textsecondary text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-violet hover:text-violet-dark text-sm font-medium transition-colors duration-300"
                  >
                    Read Article
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section ref={postsRef} className="w-full py-24 lg:py-32 bg-offwhite">
        <div className="w-full px-6 lg:px-12">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-violet text-white'
                    : 'bg-white text-textsecondary hover:bg-violet/10 hover:text-violet'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <article key={index} className="blog-card group">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-violet text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                          <Tag size={10} />
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-3 text-textsecondary text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-textprimary mb-3 line-clamp-2 group-hover:text-violet transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-textsecondary text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <Link
                        to="#"
                        className="inline-flex items-center gap-2 text-violet hover:text-violet-dark text-sm font-medium transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
