"use client";

import { motion } from 'framer-motion';
import { Search, MousePointer, Share2, Palette, Code, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your organic visibility with our proven SEO strategies.',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
  },
  {
    icon: MousePointer,
    title: 'PPC Advertising',
    description: 'Maximize ROI with targeted pay-per-click campaigns.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Build your brand presence across all social platforms.',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/20',
  },
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Create memorable brand identities that resonate.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build fast, responsive websites that convert.',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/20',
  },
  {
    icon: TrendingUp,
    title: 'Analytics',
    description: 'Track performance and optimize for better results.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/20',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to grow your business 
            and maximize your online presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className={`${service.bgColor} p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
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
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}