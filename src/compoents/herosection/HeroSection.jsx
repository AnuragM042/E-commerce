import React, { useLayoutEffect, useRef } from "react";
import Her01 from "../../assets/Hero1.jpg";
import gsap from 'gsap';

const HeroSection = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      });
    }, comp); 

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div className="w-full mt-12">
        <div className="flex justify-center items-start p-0 sm:p-10 w-full intro-slider">
          <img
            src={Her01}
            className="w-full sm:w-auto max-w-full rounded-xl"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
