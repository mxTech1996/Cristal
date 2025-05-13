'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-between  bg-white'>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col items-start justify-center p-10 max-w-lg'
      >
        <h1 className='text-5xl font-bold mb-6'>{dataSite.subtitle}</h1>
        <p className='text-gray-600 mb-6'>{dataSite.description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            window.location.href = '/more-information';
          }}
          className='rounded-full px-6 py-3 text-white font-semibold'
          style={{ backgroundColor: '#FF7F30' }} // hex orange
        >
          Get Started
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='w-full h-full lg:w-1/2'
      >
        <img
          src={dataSite.image_hero}
          alt='Decorative abstract graphics'
          className='w-full h-full object-cover'
        />
      </motion.div>
    </section>
  );
}
