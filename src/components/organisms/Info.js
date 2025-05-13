'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const SectionContent = [
  {
    number: '01.',
    title: 'About Our Services',
    description:
      'At L. Herrera Consulting, we specialize in helping advertising agencies refine their business models, improve their market positioning, and boost profitability. Our solutions are designed to support agencies at every stage of their growth journey.',
    bgColor: '#FF7F30', // orange
    textColor: 'white',
  },
  {
    number: '02.',
    title: 'Who We Work With',
    description:
      'We collaborate with creative teams, media agencies, and independent consultants to develop effective processes, optimize client acquisition strategies, and implement scalable solutions tailored to agency needs.',
    bgColor: '#E0F6FF', // light blue
    textColor: 'black',
  },
  {
    number: '03.',
    title: 'Our Mission',
    description:
      'Our mission is to empower agencies with data-driven strategies, improve operational efficiency, and deliver exceptional client experiences that lead to long-term success in a competitive market.',
    bgColor: '#E0F6FF', // light blue
    textColor: 'black',
  },
];

const getBgColor = (index) => {
  switch (index) {
    case 0:
      return '#FF7F30'; // orange
    case 1:
      return '#E0F6FF'; // light blue
    case 2:
      return '#E0F6FF'; // light blue
    case 3:
      return '#FF7F30'; // light blue
    default:
      return '#E0F6FF'; // default white
  }
};

const newSectionContent = dataSite.info.map((item, index) => ({
  ...item,
  number: `0${index + 1}.`,
  textColor: index === 0 || index === 3 ? 'white' : 'black',
  bgColor: getBgColor(index),
}));

export default function AgencyInfoSection() {
  return (
    <div id='about' className='flex-col lg:flex-row w-full grid grid-cols-3'>
      {newSectionContent.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          style={{
            backgroundColor: item.bgColor,
            color: item.textColor,
          }}
          className='flex-1 p-8 rounded-3xl min-h-[300px] flex flex-col justify-center'
        >
          <h3 className='text-lg font-medium mb-2'>
            {item.number} {item.title}
          </h3>
          <p className='text-base'>{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
