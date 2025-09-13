import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Zap,
  CloudRain,
  MinusCircle,
  Smile,
  AlertTriangle,
  Flame,
  Skull,
} from "lucide-react";

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className="flex flex-col justify-center items-center px-3 md:px-24">
      {/* Headings */}
      <div className="text-center font-bold font-heading text-blue-200 text-blue-200 text-3xl sm:text-4xl md:text-6xl">
        Trained with Disaster Data
      </div>
      <div className="text-center font-heading text-white text-blue-300 mt-3 text-md sm:text-md md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        suscipit turpis a luctus pretium. {<br></br>}Nunc dui arcu, dictum quis
        imperdiet id,{" "}
        <span className="font-semibold text-white">ultrices at metus.</span>
      </div>
      {/* Cards */}
      <div
        ref={ref}
        className="flex flex-row justify-center flex-wrap py-24 gap-3"
      >
        <motion.div
          className="card shadow-sm w-96 h-72 bg-primary flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Zap className="w-12 h-12 text-blue-300 mb-3" />
          <div className="text-4xl font-bold font-heading text-blue-100">
            {inView && <CountUp end={1850} duration={2} />}
          </div>
          <span className="text-center font-semibold text-xl text-white">
            Surprise training data
          </span>
        </motion.div>
        <motion.div
          className="card shadow-sm w-96 h-72 bg-primary flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <CloudRain className="w-12 h-12 text-blue-300 mb-3" />
          <div className="text-4xl font-bold font-heading text-blue-100">
            {inView && <CountUp end={2170} duration={2} />}
          </div>
          <span className="text-center font-semibold text-xl text-white">
            Sad training data
          </span>
        </motion.div>
        <motion.div
          className="card shadow-sm w-96 h-72 bg-primary flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <MinusCircle className="w-12 h-12 text-blue-300 mb-3" />
          <div className="text-4xl font-bold font-heading text-blue-100">
            {inView && <CountUp end={1735} duration={2} />}
          </div>
          <span className="text-center font-semibold text-xl text-white">
            Neutral training data
          </span>
        </motion.div>
        <motion.div
          className="card shadow-sm w-96 h-72 bg-primary flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Smile className="w-12 h-12 text-blue-300 mb-3" />
          <div className="text-4xl font-bold font-heading text-blue-100">
            {inView && <CountUp end={1947} duration={2} />}
          </div>
          <span className="text-center font-semibold text-xl text-white">
            Happy training data
          </span>
        </motion.div>
        <motion.div
          className="card shadow-sm w-96 h-72 bg-primary flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <AlertTriangle className="w-12 h-12 text-blue-300 mb-3" />
          <div className="text-4xl font-bold font-heading text-blue-100">
            {inView && <CountUp end={2321} duration={2} />}
          </div>
          <span className="text-center font-semibold text-xl text-white">
            Fear training data
          </span>
        </motion.div>
        <motion.div
          className="card shadow-sm w-96 h-72 bg-primary flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Flame className="w-12 h-12 text-blue-300 mb-3" />
          <div className="text-4xl font-bold font-heading text-blue-100">
            {inView && <CountUp end={2073} duration={2} />}
          </div>
          <span className="text-center font-semibold text-xl text-white">
            Angry training data
          </span>
        </motion.div>
        <motion.div
          className="card shadow-sm w-96 h-72 bg-primary flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Skull className="w-12 h-12 text-blue-300 mb-3" />
          <div className="text-4xl font-bold font-heading text-blue-100">
            {inView && <CountUp end={2184} duration={2} />}
          </div>
          <span className="text-center font-semibold text-xl text-white">
            Disgust training data
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
