"use client";

import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesPreview from '@/components/ServicesPreview';
import PortfolioPreview from '@/components/PortfolioPreview';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
      <ScrollToTop />
    </>
  );
}