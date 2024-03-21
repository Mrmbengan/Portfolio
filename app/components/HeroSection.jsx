import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hi, i'm Matias
          </h1>
          <p className="text-[#ADB7BE] py-10 text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[url('/images/starwarscompu2.png')] hover:bg-[url('/images/profilImage.jpg')] bg-cover w-48 h-48 transition-all duration-500 transform hover:rotate-[360deg]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
