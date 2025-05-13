'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dataSite } from '@/data';

export default function AdvertisingTestimonials() {
  const testimonials = dataSite.references;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      id='testimonials'
      className='w-full my-10 bg-[#FF7F30] rounded-3xl p-10 text-black flex flex-col items-center'
    >
      <h2 className='text-3xl font-semibold mb-4'>
        Real Results, Real Reviews
      </h2>

      <div className='flex items-center justify-between w-full max-w-3xl'>
        <button onClick={prevTestimonial}>&lt;</button>

        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className='text-center px-6'
          >
            <p className='text-lg mb-4 italic'>
              “{testimonials[currentIndex].description}”
            </p>
            <p className='font-semibold'>{testimonials[currentIndex].name}</p>
            {/* <p className='text-sm'>{testimonials[currentIndex].role}</p> */}
          </motion.div>
        </AnimatePresence>

        <button onClick={nextTestimonial}>&gt;</button>
      </div>

      <p className='mt-6 text-sm font-medium'>Client Testimonials</p>
    </div>
  );
}
