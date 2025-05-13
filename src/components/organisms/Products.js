'use client';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';

export default function Products() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <div id='products' className='flex flex-col lg:flex-row w-full'>
      {/* Left Column */}
      <div className='w-1/3 bg-black text-white p-10 rounded-tr-3xl rounded-br-3xl flex flex-col justify-center items-center text-center'>
        <h2 className='text-3xl font-semibold mb-4 text-[#FF7F30]'>
          Our Projects
        </h2>
        <p className='mb-4 max-w-md'>
          We’ve partnered with leading agencies to optimize operations, improve
          pitches, and increase client value.
        </p>
        <p className='max-w-md mb-6'>
          Our consulting solutions have delivered measurable impact, resulting
          in improved retention, revenue growth, and operational efficiency.
        </p>
        {/* <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='border-2 border-[#FF7F30] rounded-full px-6 py-4 text-[#FF7F30] cursor-pointer'
        >
          Explore Results
        </motion.div> */}
      </div>

      {/* Right Column */}
      <div className='flex-1 bg-[#DFF3FE] p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {dataSite.products.map((project, index) => {
          const isInCart = validateProductInCart(project.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(project.id);
          };
          return (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
              }}
              className='bg-white rounded-xl overflow-hidden shadow-md p-4'
            >
              <div className='h-40 bg-gray-200 rounded mb-4 flex items-center justify-center'>
                <img
                  src={project.image}
                  alt={project.name}
                  className='w-full h-full object-cover'
                />
                {/* Replace the above with <Image /> or <img /> */}
              </div>
              <h3 className='font-semibold text-lg mb-2'>{project.name}</h3>
              <p className='text-xl my-5 text-gray-900'>${project.price}</p>
              <p className='text-sm text-gray-600'>
                {project.description.slice(0, 150)}...
              </p>
              {/* button add to cart */}
              <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                style={{
                  backgroundColor: isInCart ? '#FF7F30' : '#DFF3FE',
                  color: isInCart ? 'white' : 'black',
                }}
                whileTap={{ scale: 0.95 }}
                className='bg-[#FF7F30] text-white rounded-full px-4 py-2 mt-4'
              >
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
