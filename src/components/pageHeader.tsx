import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiReact, SiTensorflow, SiPython, SiTypescript } from "react-icons/si";
import { WavyBackground } from "./ui/shadcn-io/wavy-background";

const images = [
  "img_1.jpg",
  "img_2.jpg",
  "img_3.jpg",
  "img_4.jpg",
  "img_5.jpg",
  "img_6.jpg",
  "img_7.jpg",
  "img_8.JPG",
];

function PageHeader() {
  return (
    <motion.div
      className="flex min-h-screen justify-center items-end"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <WavyBackground
        backgroundFill="transparent"
        colors={["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"]}
        waveWidth={1}
        blur={0.5}
        speed="slow"
        waveOpacity={0.003}
        containerClassName="absolute inset-0 h-full w-full"
        className="relative flex flex-col justify-center items-center"
      >
        <div className="flex flex-col flex-1 justify-center items-center px-4">
          <motion.h1
            className="text-6xl text-white font-heading font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            AI-Powered Image and <br /> Video Emotion Detection
          </motion.h1>

          <motion.h5
            className="text-lg font-heading text-gray-300 text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          </motion.h5>
          <motion.div
            className="flex justify-center items-center gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <button className="btn btn-lg mt-10">Classify Image</button>
            <button className="btn btn-lg mt-10">Classify Video</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h3 className="text-md font-heading font-bold text-gray-300 mt-5 text-center">
              Powered by
            </h3>
            <div className="w-full flex justify-center items-center mt-2 mb-10 gap-6">
              <>{SiReact({ className: "text-white", size: 40 })}</>
              <>{SiTensorflow({ className: "text-white", size: 40 })}</>
              <>{SiPython({ className: "text-white", size: 40 })}</>
              <>{SiTypescript({ className: "text-white", size: 40 })}</>
            </div>
          </motion.div>
          {/* Autoplay Carousel */}
          <motion.div
            className="relative mt-32 overflow-hidden py-6 max-w-[calc(100vw-240px)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {/* Track */}
            <motion.div
              className="flex w-max whitespace-nowrap transform-gpu will-change-transform"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 120,
                repeatType: "loop",
              }}
            >
              {[...images, ...images, ...images].map((img, idx) => (
                <img
                  key={idx}
                  src={`/src/carousel/${img}`}
                  alt={`Slide ${idx}`}
                  className="w-[240px] h-[320px] rounded-xl object-cover shadow-lg shrink-0 mr-4"
                />
              ))}
            </motion.div>
            <div
              className="pointer-events-none absolute inset-y-0 left-0 top-6 w-1/4 z-20
             bg-gradient-to-r from-gradientLeft to-transparent"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 top-6 w-1/4 z-20
             bg-gradient-to-l from-gradientRight to-transparent"
            />
            <div
              className="pointer-events-none absolute left-0 right-0 bottom-5 h-24 z-20
               bg-gradient-to-t from-gradientMid to-transparent"
            />
          </motion.div>
        </div>
      </WavyBackground>
    </motion.div>
  );
}

export default PageHeader;
