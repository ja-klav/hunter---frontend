import React, { useRef, useState } from "react";
import { VideoPrediction } from "@/src/hooks/useClassifyVideo";
import { Upload, Home, Download, Info } from "lucide-react";

interface PreviewClassifyVideoProps {
  preview: string | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prediction: VideoPrediction;
}

function PreviewClassifyVideo({
  preview,
  handleFileChange,
  prediction,
}: PreviewClassifyVideoProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(null);
    console.log("Video loaded successfully");
  };

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    const error = (e.target as HTMLVideoElement).error;
    const errorMessage = error
      ? `Video error: ${error.message} (Code: ${error.code})`
      : "Unknown video error";
    setVideoError(errorMessage);
    setVideoLoaded(false);
    console.error("Video error:", error);
  };

  const handleVideoLoadStart = () => {
    console.log("Video load started");
    setVideoError(null);
  };

  console.log("Prediction video URL:", prediction.video_url);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full h-full">
      <div className="w-full md:w-3/5 px-3 md:px-16 bg-gray-300 py-5 md:py-0">
        {videoError ? (
          <div className="min-h-[40rem] rounded-lg shadow w-full bg-red-100 border-2 border-red-300 flex flex-col items-center justify-center p-8">
            <div className="text-red-600 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Video Loading Error
              </h3>
              <p className="text-sm mb-4">{videoError}</p>
              <p className="text-xs text-gray-600">
                Try downloading the video instead, or check browser console for
                more details.
              </p>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            key={prediction.video_url} // Force re-render when URL changes
            src={prediction.video_url}
            controls
            preload="metadata" // Load metadata first
            className="min-h-[40rem] rounded-lg shadow w-full object-contain"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            onLoadStart={handleVideoLoadStart}
            onCanPlay={() => console.log("Video can start playing")}
            style={{ backgroundColor: "#f3f4f6" }} // Fallback background
          >
            <p>Your browser does not support the video tag.</p>
          </video>
        )}

        {!videoLoaded && !videoError && (
          <div className="text-center mt-2 text-gray-600">
            <p>Loading video...</p>
          </div>
        )}
      </div>

      <div className="w-full md:w-2/5 flex flex-col items-center md:items-start gap-8 px-8 md:px-8 py-8 bg-white rounded-xl shadow-md px-3">
        <input
          type="file"
          accept="video/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Actions */}
        <div className="flex flex-col gap-4 w-full">
          {/* Upload */}
          <button
            onClick={handleClick}
            className="btn bg-gray-200 text-black rounded-xl px-6 py-6 hover:bg-primary hover:text-white border-none flex flex-col items-center justify-center gap-2 h-28"
          >
            <Upload size={28} />
            <span className="text-sm">Upload</span>
          </button>

          {/* Home */}
          <a
            href="/"
            className="btn bg-primary text-white rounded-xl px-6 py-6 hover:bg-gray-300 hover:text-black border-none flex flex-col items-center justify-center gap-2 h-28"
          >
            <Home size={28} />
            <span className="text-sm">Home</span>
          </a>

          {/* Download */}
          <a
            href={prediction.video_url}
            download="predicted_video.mp4"
            className="btn bg-green-500 text-white rounded-xl px-6 py-6 hover:bg-green-600 border-none flex flex-col items-center justify-center gap-2 h-28"
          >
            <Download size={28} />
            <span className="text-sm">Download</span>
          </a>
        </div>

        {/* Info Section */}
        <div className="w-full bg-gray-50 p-4 rounded-lg border text-sm text-gray-700 flex items-start gap-3">
          <Info size={20} className="text-primary shrink-0 mt-0.5" />
          <p>
            After processing, you can preview your classified video on the left.
            Use the <strong>Download</strong> button to save it locally, or{" "}
            <strong>Upload New</strong> to run another test.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PreviewClassifyVideo;
