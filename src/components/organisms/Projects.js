'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const projects = dataSite.services;

  return (
    <div id='info' className='py-12 px-4 md:px-12 bg-[#FAFAFA]'>
      <h2 className='text-3xl font-bold mb-2'>Our Projects</h2>
      <p className='text-gray-600 mb-8 max-w-xl'>
        Explore some of our success stories helping agencies unlock new growth
        through positioning, sales strategies, and client retention programs.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className='rounded-xl overflow-hidden shadow-md bg-white'
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <p className='text-gray-600 text-sm'>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
