"use client";

import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { 
  Search, 
  MousePointer, 
  Share2, 
  Palette, 
  Code, 
  TrendingUp,
  Mail,
  Video
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Boost your organic visibility and drive targeted traffic with our comprehensive SEO strategies.',
    features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building'],
  },
  {
    icon: MousePointer,
    title: 'PPC Advertising',
    description: 'Maximize your ROI with data-driven pay-per-click campaigns across Google, Facebook, and more.',
    features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'Conversion Tracking'],
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build your brand presence and engage your audience across all major social platforms.',
    features: ['Content Strategy', 'Community Management', 'Social Advertising', 'Analytics'],
  },
  {
    icon: Palette,
    title: 'Logo & Brand Design',
    description: 'Create a memorable brand identity that resonates with your target audience.',
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Brand Strategy'],
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build fast, responsive, and conversion-optimized websites that drive results.',
    features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'Performance Optimization'],
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Reporting',
    description: 'Track your success with comprehensive analytics and actionable insights.',
    features: ['Performance Tracking', 'Custom Dashboards', 'ROI Analysis', 'Monthly Reports'],
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture leads and retain customers with personalized email campaigns.',
    features: ['Campaign Design', 'Automation', 'Segmentation', 'A/B Testing'],
  },
  {
    icon: Video,
    title: 'Content Creation',
    description: 'Engage your audience with compelling content that drives action and builds trust.',
    features: ['Video Production', 'Copywriting', 'Graphic Design', 'Content Strategy'],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to grow your business and maximize your online presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}