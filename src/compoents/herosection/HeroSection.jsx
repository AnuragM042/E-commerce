import React from 'react';
import Her01 from '../../assets/Hero1.jpg';

const HeroSection = () => {
  return (
    <div className="w-full mt-12">
      <div className="flex justify-center items-start p-0 sm:p-10 w-full">
        <img 
          src={Her01} 
          className="w-full sm:w-auto max-w-full rounded-xl" 
          alt="Hero" 
        />
      </div>
    </div>
  );
};

export default HeroSection;
