"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioItem from '@/components/PortfolioItem';

const categories = ['All', 'SEO', 'PPC', 'Design', 'Web Development', 'Social Media'];

const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce SEO Campaign',
    category: 'SEO',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Increased organic traffic by 300% for online retailer',
    results: '+300% Traffic, +150% Revenue',
  },
  {
    id: 2,
    title: 'SaaS Landing Page Design',
    category: 'Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Modern landing page design with 45% conversion rate',
    results: '45% Conversion Rate',
  },
  {
    id: 3,
    title: 'Google Ads Campaign',
    category: 'PPC',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Reduced cost per acquisition by 60% for tech startup',
    results: '-60% CPA, +200% ROI',
  },
  {
    id: 4,
    title: 'Restaurant Website',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Responsive website with online ordering system',
    results: '+80% Online Orders',
  },
  {
    id: 5,
    title: 'Fashion Brand Social Media',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Instagram growth campaign for fashion brand',
    results: '+500% Followers, +400% Engagement',
  },
  {
    id: 6,
    title: 'Local Business SEO',
    category: 'SEO',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Local SEO optimization for service business',
    results: '#1 Local Rankings',
  },
  {
    id: 7,
    title: 'E-learning Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Custom learning management system',
    results: '10,000+ Active Users',
  },
  {
    id: 8,
    title: 'Healthcare Brand Identity',
    category: 'Design',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Complete brand identity for healthcare startup',
    results: 'Brand Recognition +250%',
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
            Explore our successful projects and see how we've helped businesses achieve their digital marketing goals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white glow-blue'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioItem
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}