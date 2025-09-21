import React, { useRef } from "react";
import { Prediction } from "@/src/hooks/useClassifyImage";

interface PreviewClassifyImageProps {
  preview: string | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prediction: Prediction;
}

function PreviewClassifyImage({
  preview,
  handleFileChange,
  prediction,
}: PreviewClassifyImageProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full h-full">
      <div className="w-full md:w-3/5 px-3 md:px-16 bg-gray-300 py-5 md:py-0">
        <img
          alt={preview as string}
          src={`data:image/png;base64,${prediction.image_base64}`}
          className="max-h-[30rem] rounded-lg shadow w-full object-contain"
        />
      </div>
      <div className="w-full md:w-2/5 flex flex-col mt-3 md:mt-0 justify-center items-center md:items-start px-0 md:px-8 py-8">
        <div className="carousel w-full space-x-4">
          {prediction.faces.map((pred, i) => (
            <div
              key={pred.face_id}
              id={`slide${i}`}
              className="carousel-item relative w-full flex flex-col items-center"
            >
              <div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-center">
                {/* Left side: label + buttons */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="text-3xl md:text-4xl font-heading text-primary font-semibold">
                    {pred.label.toUpperCase()}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-row gap-3 mt-4">
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <button
                      onClick={handleClick}
                      className="btn bg-gray-200 text-black rounded-full px-6 py-2 hover:bg-primary hover:text-white border-none w-32"
                    >
                      Upload
                    </button>
                    <a
                      href="/"
                      className="btn bg-primary text-white rounded-full px-6 py-2 hover:bg-gray-300 hover:text-black border-none w-32 flex justify-center"
                    >
                      Home
                    </a>
                  </div>
                </div>

                {/* Right side: cropped face */}
                <img
                  src={`data:image/png;base64,${pred.face_image_base64}`}
                  alt={`Face ${i}`}
                  className="w-28 h-28 md:w-32 md:h-32 object-contain mt-4 md:mt-0 rounded-lg shadow-md"
                />
              </div>

              {/* Predictions table */}
              <div className="mt-5 text-sm">
                How did the model score this image?
              </div>
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Emotion</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {pred.all_predictions?.map((p, index) => (
                    <tr key={index}>
                      <td>{p.label}</td>
                      <td>{p.score.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Carousel navigation */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                <button
                  onClick={() =>
                    document
                      .getElementById(
                        `slide${i === 0 ? prediction.faces.length - 1 : i - 1}`
                      )
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center",
                      })
                  }
                  className="btn btn-circle opacity-25 hover:opacity-100"
                >
                  ❮
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById(
                        `slide${(i + 1) % prediction.faces.length}`
                      )
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center",
                      })
                  }
                  className="btn btn-circle opacity-25 hover:opacity-100"
                >
                  ❯
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PreviewClassifyImage;
