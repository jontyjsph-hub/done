"use client";

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  item: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    results: string;
  };
  index: number;
}

export default function PortfolioItem({ item, index }: PortfolioItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      layout
    >
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-blue-500 p-3 rounded-full glow-blue">
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <span className="text-sm text-blue-400 font-medium">{item.category}</span>
          <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-green-400 font-semibold">{item.results}</span>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}