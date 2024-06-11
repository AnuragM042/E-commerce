import React, { useContext } from 'react';
import myContext from '../../context/data/MyContext';

const Footer = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div
      className='flex flex-wrap mx-auto items-center justify-evenly py-5'
      style={{
        color: mode === 'dark' ? 'white' : 'white',
        backgroundColor: mode === 'dark' ? 'grey' : 'black'
      }}
    >
      <div className='flex flex-wrap justify-center items-start gap-5 w-full'>
        {/* Categories */}
        <div className='w-[200px] flex flex-col gap-2'>
          <h3 className='text-xl mb-2'>CATEGORIES</h3>
          <p className='hover:underline hover:text-red-500 cursor-pointer'>Home</p>
          <p className='hover:underline hover:text-red-500 cursor-pointer'>Order</p>
          <p className='hover:underline hover:text-red-500 cursor-pointer'>Cart</p>
        </div>
        {/* Customer Service */}
        <div className='w-[200px] flex flex-col gap-2'>
          <h3 className='text-xl mb-2'>CUSTOMER SERVICE</h3>
          <p className='hover:underline hover:text-red-500 cursor-pointer'>Return Policy</p>
          <p className='hover:underline hover:text-red-500 cursor-pointer'>Contact Us</p>
        </div>
        {/* Services */}
        <div className='w-[200px] flex flex-col gap-2'>
          <h3 className='text-xl mb-2'>SERVICES</h3>
          <p className='hover:underline hover:text-red-500 cursor-pointer'>Privacy</p>
        </div>
        {/* Placeholder for image or additional content */}
        <div className='w-[200px]'>
          {/* You can add an image or additional content here */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
