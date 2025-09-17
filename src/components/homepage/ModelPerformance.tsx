import React from "react";
import { lossData, accuracyData } from "../../data/data";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Download, BookOpen } from "lucide-react";

import { useInView } from "react-intersection-observer";

function ModelPerformance() {
  const { ref: accRef, inView: accInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: lossRef, inView: lossInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="px-3 sm:px-3 md:px-24 flex flex-row flex-wrap justify-between items-center mt-24 min-h-screen">
      <div className="w-full h-100 md:w-1/2 flex flex-col justify-center">
        {/* Left side of the screen */}
        <div className="text-2xl sm:text-3xl md:text-5xl text-blue-300 font-semibold font-heading">
          FAST, EFFICIENT
        </div>
        <div className="text-3xl sm:text-4xl md:text-6xl text-white font-bold font-heading">
          ACCURATE
        </div>
        <div className="pt-8 md:pt-16 text-sm md:text-md text-white leading-relaxed max-w-xl">
          Our emotion detection model is optimized for speed and accuracy,
          making it suitable for both real-time video streams and large-scale
          image analysis.
        </div>

        <div className="mt-4 text-sm md:text-md text-white leading-relaxed max-w-xl">
          <strong>Accuracy steadily improves</strong> with each epoch, as shown
          in the chart on the right. This demonstrates the model’s ability to
          learn meaningful patterns and improve performance over time.
        </div>

        <div className="mt-4 text-sm md:text-md text-white leading-relaxed max-w-xl">
          <strong>Training and validation loss</strong> decrease consistently
          across epochs, indicating strong generalization without overfitting.
          The close alignment between curves shows that the model performs well
          on unseen data.
        </div>

        <div className="flex flex-row gap-3 mt-12">
          <button className="btn bg-primary text-white rounded-full border-none shadow-none mt-4 w-32 md:w-48 py-8 md:py-4 flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Model
          </button>

          <button className="btn text-primary bg-white rounded-full border-none shadow-none mt-4 w-32 md:w-48 py-8 md:py-4 flex items-center justify-center gap-2">
            <BookOpen className="w-5 h-5" />
            Open Notebook
          </button>
        </div>
      </div>
      {/* Right screen | echarts */}
      <div className="w-full md:w-1/2 flex flex-col gap-8 mt-8 md:mt-0">
        {/* Accuracy Chart */}
        <div className="w-full h-[420px]" ref={accRef}>
          <div className="text-center text-blue-100 font-semibold text-xl">
            Accuracy through epochs
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="epoch" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip labelFormatter={(label) => `Epoch #${label}`} />
              <Legend />
              {accInView && (
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#2ecc71"
                  strokeWidth={1}
                  dot={{ r: 2 }}
                  isAnimationActive={true}
                  animationBegin={0}
                  animationDuration={1500}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Loss Chart */}
        <div className="w-full h-[420px]" ref={lossRef}>
          <div className="text-center text-blue-100 font-semibold text-xl">
            Training vs Validation loss through epochs
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lossData}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
              <XAxis dataKey="epoch" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip labelFormatter={(label) => `Epoch #${label}`} />
              <Legend />
              {lossInView && (
                <>
                  <Line
                    type="monotone"
                    dataKey="training"
                    stroke="#3498db"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={true}
                    animationBegin={0}
                    animationDuration={1500}
                  />
                  <Line
                    type="monotone"
                    dataKey="validation"
                    stroke="#e67e22"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={true}
                    animationBegin={0}
                    animationDuration={1500}
                  />
                </>
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ModelPerformance;
