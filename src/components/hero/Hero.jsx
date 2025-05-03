import React from "react";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
// import heroImage from "../../assets/startup4.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pb-1 px-4 sm:px-6 lg:px-8"
    >
      {/* left column */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* start badge */}

        <motion.div variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView="show">
          <div className="star flex items-center gap-2 bg-gray-100 w-fit px-4 py-2 rounded-full hover:bg-gray-200 transition-colors coursor-pointer group">
            <span className="text-blue-600 group-hover:text-amber-400 group-hover:scale-110 transition-transform">
              ★★★★★
            </span>
            <span className="text-sm font-medium">Jump start your growth</span>
          </div>
        </motion.div>

        {/* heading */}

        <motion.div variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show">
          <h1 className="typewriter-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We boost the growth for
            <span className="text-blue-600 inline-block">
              Startup to Fortune 500
            </span>
            <h6 className=" bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></h6>
            Companies
            <span className="inline-block ml-2 animate-pulse">⏰</span>
          </h1>
        </motion.div>

        {/* paragraph */}

        <motion.div variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show">
          <p className="text-gray-600 text-lg md:text-xl max-w-xl">
            Get the most accurate leads, sales people training and conversions,
            tools and more — all within the same one billing.
          </p>
        </motion.div>

        <motion.div variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show" className="flex gap-3 max-w-md">
          {/* Email Form */}
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-600"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
            →
          </button>
        </motion.div>
      </div>

      {/* right column */}
      <motion.div variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show" className="w-full md:w-1/2 mt-10 md:mt-0 pl-0 md:pl-4">
        <div className="">
          <img
            src="https://iili.io/2ysFUen.png"
            alt="Team meeting"
            className="rounded-lg z-10 hover:scale-[1.02] transition-colors duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
