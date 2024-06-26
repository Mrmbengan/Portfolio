"use client";
import React from "react";

import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div 
          initial={{opacity: 0, scale: 0}} 
          animate={{opacity: 1, scale: 1}} 
          transition={{duration: 1.5}} 
          className="col-span-7 place-self-center text-center"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
                Hello, i&apos;m {" "} 
            </span>
            <br />
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    1000,
                    'Matias',
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    ' a Web Developer',
                    1000,
                    'a Mobile Developer',
                    1000,
                    'a Fullstack Developer',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] py-10 text-lg lg:text-xl mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div>
            <button onClick={() => window.open("https://www.linkedin.com/in/matias-bengtsson/overlay/contact-info/", "_blank")} className="text-black px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500  to-white hover:bg-slate-200 hover:scale-[1.1]">
                Hire Me
            </button>
            <button onClick={() => window.open("https://www.linkedin.com/in/matias-bengtsson/", "_blank")} className="text-white px-6 py-3 rounded-full bg-gradient-to-br from-white  to-blue-600 hover:bg-slate-200 hover:scale-[1.1]">
                <span className="block bg-gray-900 hover:bg-slate-800 rounded-full px-5">CV</span>
            </button>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className=" rounded-full relative w-[250px] h-[250px] bg-[url('/images/starwarscompu2.png')] hover:bg-[url('/images/profilImage.jpg')] bg-cover w-48 h-48 transition-all duration-500 transform hover:rotate-[360deg] z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
