import React from "react";
import { useClassifyImage } from "../../hooks/useClassifyImage";
import ScratchClassifyImage from "./ScratchClassifyImage";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import PreviewClassifyImage from "./PreviewClassifyImage";

function ClassifyImageWrapper() {
  const {
    selectedFile,
    preview,
    loading,
    handleFileChange,
    handleDragOver,
    handleDrop,
    prediction,
  } = useClassifyImage();

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-3 md:px-36">
      {/* Animated title */}
      <motion.div
        className="font-bold font-heading text-2xl md:text-5xl text-center text-blue-100 md:mt-0 mt-32 px-5 md:px-0"
        animate={{
          scale: selectedFile && loading ? 1.2 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        Classify Emotion from Image
      </motion.div>

      <div className="mt-4 text-gray-300 text-sm md:text-md">
        Upload an image and let AI detect the emotion.
      </div>

      {/* Show loading icon when a file is selected */}
      {selectedFile && loading && (
        <motion.div
          className="mt-8 flex items-center space-x-2 text-blue-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="animate-spin text-2xl">
            <AiOutlineLoading3Quarters />
          </span>
          <span className="text-md">Processing...</span>
        </motion.div>
      )}

      {/* AnimatePresence will handle exit animation for ScratchClassifyImage */}
      <AnimatePresence>
        {!selectedFile && (
          <motion.div
            key="scratch-upload"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center w-full"
          >
            <ScratchClassifyImage
              handleDrop={handleDrop}
              handleDragOver={handleDragOver}
              handleFileChange={handleFileChange}
              preview={preview}
              loading={loading}
            />
          </motion.div>
        )}

        {selectedFile && !loading && prediction && (
          <motion.div
            key="preview-upload"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center w-full mt-5 bg-white rounded-xl"
          >
            <PreviewClassifyImage
              handleFileChange={handleFileChange}
              preview={preview}
              prediction={prediction}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ClassifyImageWrapper;
