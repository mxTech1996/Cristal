'use client';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

export default function StickyNavbar() {
  const { products } = useCart();
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className='sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-md rounded-full'
      style={{ backgroundColor: '#FF7F30' }} // Orange background in hex
    >
      <img
        src={dataSite.iconImage}
        alt='Logo'
        className='w-16 h-16 rounded-full'
        style={{ backgroundColor: '#FFFFFF' }} // White background for the logo
      />

      <div className='flex gap-8'>
        <a href='/' className='hover:underline text-white'>
          Home
        </a>
        <a href='/#products' className='hover:underline text-white'>
          Our Products
        </a>
        <a href='/#about' className='hover:underline text-white'>
          About Us
        </a>
        <a href='/#services' className='hover:underline text-white'>
          Our Services
        </a>
        <a href='/#info' className='hover:underline text-white'>
          Our Work
        </a>
        <a href='/more-information' className='hover:underline text-white'>
          Contact
        </a>
        <button
          className='relative flex items-center gap-2 px-3 py-1 rounded-full hover:scale-105 transition'
          style={{ backgroundColor: '#FFFFFF', color: '#FF7F30' }}
        >
          <FaShoppingCart />
          Cart
          <span
            className='absolute -top-1 -right-1 rounded-full px-1 text-xs'
            style={{ backgroundColor: '#FF0000', color: '#FFFFFF' }}
          >
            {products.length}
          </span>
        </button>
      </div>
    </motion.nav>
  );
}
