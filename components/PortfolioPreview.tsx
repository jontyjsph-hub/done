"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Growth Campaign',
    category: 'SEO & PPC',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    result: '+300% Revenue Growth',
  },
  {
    id: 2,
    title: 'Brand Identity Redesign',
    category: 'Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    result: '+200% Brand Recognition',
  },
  {
    id: 3,
    title: 'SaaS Platform Website',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    result: '45% Conversion Rate',
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Social Media',
    image: 'https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=800',
    result: '+500% Engagement',
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Discover how we've helped businesses achieve remarkable results through 
            our strategic digital marketing solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-blue-500 p-3 rounded-full glow-blue">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm text-blue-400 font-medium">{item.category}</span>
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-green-400 font-medium">{item.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 glow-blue"
          >
            <Link href="/portfolio">View Full Portfolio</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}