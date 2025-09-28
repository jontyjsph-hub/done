"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const words = ['Growth', 'Success', 'Results', 'Excellence'];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Digital Marketing for{' '}
              <span className="gradient-text relative">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {words[currentWord]}
                </motion.span>
                <span className="invisible">{words[0]}</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-300 mb-8 max-w-lg"
            >
              Transform your business with data-driven digital marketing strategies that deliver measurable results and sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 glow-blue text-lg px-8 py-4"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white text-lg px-8 py-4"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-slate-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5x</div>
                <div className="text-slate-400">Average ROI</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-slate-300">SEO Traffic: +300%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                    <span className="text-slate-300">Conversion Rate: +150%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                    <span className="text-slate-300">ROI: +400%</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-4 glow-pink"
              >
                <div className="text-2xl">🚀</div>
              </motion.div>

              <motion.div
                animate={{ x: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full p-4 glow-green"
              >
                <div className="text-2xl">📈</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}