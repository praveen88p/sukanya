import { HeroSection } from '@/sections/HeroSection';
import { WhyChooseSection } from '@/sections/WhyChooseSection';
import { ServicesPreviewSection } from '@/sections/ServicesPreviewSection';
import { AboutPreviewSection } from '@/sections/AboutPreviewSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { BlogPreviewSection } from '@/sections/BlogPreviewSection';
import { CTASection } from '@/sections/CTASection';

export function HomePage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <HeroSection />
      <WhyChooseSection />
      <ServicesPreviewSection />
      <AboutPreviewSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTASection />
    </div>
  );
}
