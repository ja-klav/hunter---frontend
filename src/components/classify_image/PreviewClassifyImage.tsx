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
        <div className="text-4xl font-heading text-primary font-semibold">
          {prediction.label.toUpperCase()}
        </div>
        <div className="flex flex-row gap-3 pb-8 md:pb-0">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={handleClick}
            className="btn bg-gray-200 text-black mt-4 rounded-full px-6 py-2 hover:bg-primary hover:text-white border-none w-36"
          >
            Upload Photo
          </button>
          <a
            href="/"
            className="btn bg-primary text-white mt-4 rounded-full px-6 py-2 hover:bg-gray-300 hover:text-black border-none w-36 items-center flex justify-center"
          >
            Home
          </a>
        </div>
        <div className="mt-5 text-sm">How did the model scored this image?</div>
        <table className="table">
            <thead>
                <tr>
                    <th>Emotion</th>
                    <th>Score</th>
                </tr>
            </thead>
            {
                prediction.all_predictions && prediction.all_predictions.length > 0 && (
                    prediction.all_predictions.map((pred, index)=>{
                        return(
                            <tr key={index}>
                                <td>{pred.label}</td>
                                <td>{pred.score}</td>
                            </tr>
                        )
                    })
                )
            }
        </table>
      </div>
    </div>
  );
}

export default PreviewClassifyImage;
