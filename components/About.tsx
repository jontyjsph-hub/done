"use client";

import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle, Users, Award, Target } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Industry professionals with 10+ years of experience',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Award-winning campaigns that deliver measurable success',
  },
  {
    icon: Target,
    title: 'Strategic Approach',
    description: 'Data-driven strategies tailored to your business goals',
  },
];

const benefits = [
  'Increased online visibility and brand awareness',
  'Higher conversion rates and lead generation',
  'Improved customer engagement and retention',
  'Competitive advantage in your market',
];

export default function About() {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              About <span className="gradient-text">DigitalPro</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              We're a full-service digital marketing agency dedicated to helping businesses 
              thrive in the digital landscape. With our proven strategies and innovative 
              approach, we've helped hundreds of companies achieve their growth objectives.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                <div className="text-3xl font-bold text-blue-400">10+</div>
                <div className="text-slate-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                <div className="text-3xl font-bold text-green-400">500+</div>
                <div className="text-slate-400">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}