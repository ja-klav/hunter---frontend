import React from "react";

function Features() {
  return (
    <div className="bg-black h-[50vh] flex flex-row justify-between items-center hidden md:flex gap-3">
      {/* Left */}
      <div className="w-2/5 flex flex-col h-full items-start justify-center ps-32">
        <div className="text-white text-5xl font-bold font-heading">
          Features
        </div>
        <div className="mt-3 text-gray-300 text-md">
          Discover the core capabilities of our AI-powered platform. Built for
          speed, accuracy, and scalability, it adapts seamlessly to both still
          images and live video streams.
        </div>
      </div>
      {/* Right */}
      <div className="w-3/5 h-full flex flex-row gap-5 items-center justify-end text-white">
        <a
          href="/image"
          className="h-[calc(100%-60px)] bg-gray-300 rounded w-96 text-black cursor-pointer px-16 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          {/* Heading */}
          <div className="my-16 text-primary text-9xl font-bold font-heading">
            1
          </div>
          <div className="text-xl font-semibold font-heading text-black">
            Image Emotion Recognition
          </div>
          <div className="text-sm mt-2 font-gray-700">
            Upload a single image and instantly detect emotions such as
            happiness, sadness, anger, and more. Perfect for research,
            analytics, or real-time applications.
          </div>
        </a>

        <a className="h-[calc(100%-60px)] bg-gray-300 rounded w-96 text-black cursor-pointer px-16 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          {/* Heading */}
          <div className="my-16 text-primary text-9xl font-bold font-heading">
            2
          </div>
          <div className="text-xl font-semibold font-heading text-black">
            Video Emotion Recognition
          </div>
          <div className="text-sm mt-2 font-gray-700">
            Process video streams frame by frame to capture emotional trends
            over time. Ideal for disaster response, behavioral analysis, and
            other scenarios where human emotion matters.
          </div>
        </a>
      </div>
    </div>
  );
}

export default Features;
