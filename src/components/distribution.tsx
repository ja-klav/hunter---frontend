import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useInView } from "react-intersection-observer";

const data = [
  { name: "Surprise", value: 1850 },
  { name: "Sad", value: 2170 },
  { name: "Neutral", value: 1735 },
  { name: "Happy", value: 1947 },
  { name: "Fear", value: 2321 },
  { name: "Angry", value: 2073 },
  { name: "Disgust", value: 2184 },
];

const COLORS = [
  "#4ecdc4",
  "#ff6b6b",
  "#45b7d1",
  "#96ceb4",
  "#feca57",
  "#9b59b6",
  "#2ecc71",
];

const total = data.reduce((sum, item) => sum + item.value, 0);

function Distribution() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="min-h-[60vh] flex flex-col md:flex-row items-center justify-start gap-8 py-12 px-4 md:px-24"
    >
        {/* Hide on large screen */}
      <div className="w-full md:w-1/3 flex flex-col md:hidden items-center md:items-start justify-center text-center md:text-left mt-8 md:mt-0">
        <div
          className={`text-3xl sm:text-4xl md:text-5xl text-blue-100 font-bold font-heading transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Beautifully Distributed
        </div>
        <div
          className={`text-gray-200 mt-3 text-sm sm:text-base md:text-lg max-w-md transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus
          magna, euismod vel dapibus id, pretium ut enim. Maecenas ut egestas
          libero.
        </div>
      </div>
      {/* Chart */}
      <div className="w-full md:w-1/3 h-[250px] md:h-[300px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={inView ? data : []}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              isAnimationActive={inView}
              animationBegin={0}
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(val, name) => [
                `${((Number(val) / total) * 100).toFixed(1)}%`,
                name,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Percent Labels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6 text-gray-300 text-base sm:text-lg">
        {data.map((item, index) => {
          const percent = ((item.value / total) * 100).toFixed(1);
          return (
            <div
              key={item.name}
              className={`flex items-center gap-2 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span
                className="inline-block w-6 h-6 sm:w-10 sm:h-10 rounded"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <div className="flex flex-col">
                <span className="text-white text-lg sm:text-xl font-semibold">
                  {percent}%
                </span>
                <span className="text-gray-400">{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/3 hidden md:flex flex flex-col items-center md:items-start justify-center text-center md:text-left mt-8 md:mt-0">
        <div
          className={`text-3xl sm:text-4xl md:text-5xl text-blue-100 font-bold font-heading transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Beautifully Distributed
        </div>
        <div
          className={`text-gray-200 mt-3 text-sm sm:text-base md:text-lg max-w-md transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris risus
          magna, euismod vel dapibus id, pretium ut enim. Maecenas ut egestas
          libero.
        </div>
      </div>
    </div>
  );
}

export default Distribution;
