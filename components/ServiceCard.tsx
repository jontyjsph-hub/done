"use client";

import { motion } from 'framer-motion';
import { Video as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <div className="bg-blue-500/20 p-4 rounded-full w-fit mb-6 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-300">
        <service.icon className="w-8 h-8 text-blue-400" />
      </div>

      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
        {service.title}
      </h3>

      <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors">
        {service.description}
      </p>

      <ul className="space-y-2">
        {service.features.map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-slate-300"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}