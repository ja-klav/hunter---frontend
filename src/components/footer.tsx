import React from "react";
import { Mail, Rabbit } from "lucide-react";

function Footer() {
  return (
    <div className="w-full min-h-[50vh] bg-gradient-to-b from-transparent to-black px-6 md:px-24 flex flex-col md:flex-row justify-between items-center py-12 gap-12 md:gap-0">
      {/* Left */}
      <div className="w-full md:w-1/2 flex flex-col gap-3 md:pe-16 justify-center items-start text-center md:text-left">
        <div className="text-yellow-400 font-bold font-heading text-3xl sm:text-4xl md:text-6xl leading-snug">
          EMOTISCAN <br />
          AI - Powered Website
        </div>
        <div className="text-gray-300 text-base sm:text-lg md:text-xl mt-3">
          Contact me for collaboration
        </div>

        {/* Email box */}
        <div className="mt-4 w-full h-14 sm:h-16 rounded-full flex flex-row sm:flex-row justify-between items-center bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-2 text-gray-500 w-full sm:w-auto text-sm sm:text-base">
            your.email@domain.com
          </div>
          <button className="w-full sm:w-44 h-full sm:h-full bg-primary text-white rounded-full flex items-center gap-2 px-4 justify-center sm:mt-0">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Send an email</span>
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center text-center md:text-right gap-2">
        <div className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-white flex flex-row items-center gap-2">
          <span>designed by hunter.</span>
          <Rabbit className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="font-heading text-sm sm:text-base md:text-lg text-gray-400 mt-6 md:mt-16">
          Lyceum of the Philippines
        </div>
        <div className="font-heading text-sm sm:text-base md:text-lg text-gray-400">
          Manila, Philippines
        </div>
        <div className="font-heading text-sm sm:text-base md:text-lg text-gray-400">
          Est. 2025
        </div>
        <div className="font-heading text-sm sm:text-base md:text-lg text-gray-400">
          All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
