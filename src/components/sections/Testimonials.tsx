'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      textKey: 'testimonial1.text',
      authorKey: 'testimonial1.author',
      positionKey: 'testimonial1.position',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      id: 2,
      textKey: 'testimonial2.text',
      authorKey: 'testimonial2.author',
      positionKey: 'testimonial2.position',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      id: 3,
      textKey: 'testimonial3.text',
      authorKey: 'testimonial3.author',
      positionKey: 'testimonial3.position',
      gradient: 'from-emerald-600 to-teal-600',
    },
  ];

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get current and next testimonial (showing 2 at once)
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonios" className="px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t('title')}
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-blue-600 dark:text-blue-400" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-blue-600 dark:text-blue-400" />
          </button>

          {/* Testimonials Grid - 2 cards with slide animation */}
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`bg-gradient-to-br ${testimonial.gradient} rounded-3xl p-8 shadow-2xl`}
                >
                  <div className="flex flex-col items-center text-center h-full justify-between">
                    
                    <div className="text-6xl text-white/30 mb-4">"</div>
                    
                    <p className="text-base sm:text-lg text-white leading-relaxed mb-6 flex-1">
                      {t(testimonial.textKey)}
                    </p>

                    <div className="flex flex-col items-center">
                      <p className="text-lg font-bold text-white mb-1">
                        {t(testimonial.authorKey)}
                      </p>
                      <p className="text-sm text-white/80">
                        {t(testimonial.positionKey)}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400 w-8'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}