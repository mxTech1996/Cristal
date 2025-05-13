'use client';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users } from 'lucide-react';

export default function AdvertisingConsultingServices() {
  return (
    <div id='services' className='flex flex-col lg:flex-row w-full my-20'>
      {/* Left Side - Service Overview */}
      <div className='flex-1 bg-white text-black p-10 flex flex-col justify-center'>
        <h2 className='text-3xl font-semibold mb-4'>Consulting Services</h2>
        <p className='mb-4'>
          At <strong>L. Herrera Consulting</strong>, we help advertising
          agencies improve operations, sharpen positioning, and drive client
          success. Our proven methodologies are tailored to agencies of all
          sizes.
        </p>
        <p className='mb-4'>
          From strategy workshops to process audits and client management
          training, our goal is to equip your team with the insights and tools
          needed to thrive in a competitive market.
        </p>
        <button className='bg-[#FF7F30] hover:bg-[#e06724] text-white px-6 py-2 rounded-full mt-4 w-fit'>
          Learn More
        </button>
      </div>

      {/* Right Side - Service Highlights */}
      <div className='flex-1 bg-black text-white p-10 rounded-tl-3xl rounded-bl-3xl'>
        <ServiceItem
          icon={<Briefcase />}
          title='Strengthen Client Relationships'
          description='We guide your team on how to improve client communication, retain key accounts, and deliver measurable value that boosts loyalty.'
        />
        <hr className='border-gray-700 my-6' />
        <ServiceItem
          icon={<TrendingUp />}
          title='Boost Agency Profitability'
          description='We optimize your pricing models, pitch processes, and service packages to help you increase margins and secure higher-value projects.'
        />
        <hr className='border-gray-700 my-6' />
        <ServiceItem
          icon={<Users />}
          title='Enhance Team Efficiency'
          description='Through process audits and custom frameworks, we help your team work smarter, collaborate better, and deliver consistent quality at scale.'
        />
      </div>
    </div>
  );
}

function ServiceItem({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='flex items-start gap-4'
    >
      <div className='bg-[#FF7F30] text-black p-2 rounded-full'>{icon}</div>
      <div>
        <h3 className='text-xl font-semibold mb-1'>{title}</h3>
        <p className='text-sm text-gray-300'>{description}</p>
      </div>
    </motion.div>
  );
}
