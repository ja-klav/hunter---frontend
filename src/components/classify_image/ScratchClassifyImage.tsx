import React from "react";

interface ScratchClassifyImageProps {
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  preview: string | null;
  loading: boolean;
}

const ScratchClassifyImage = ({
  handleDrop,
  handleDragOver,
  handleFileChange,
  preview,
  loading,
}: ScratchClassifyImageProps) => {
  return (
    <>
      <div
        className="mt-24 w-full md:w-1/2 bg-gray-100 sm-shadow h-96 rounded-2xl flex items-center justify-center p-6 cursor-pointer hover:bg-gray-300"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() =>
          document
            .querySelector<HTMLInputElement>('input[type="file"]')
            ?.click()
        }
      >
        <div className="bg-transparent border-4 border-gray-500 border-dashed rounded-2xl w-full h-full flex flex-col items-center justify-center p-12">
          <div className="text-2xl font-heading font-semibold text-center">
            Drag and drop an image or{" "}
            <label className="text-primary font-bold cursor-pointer">
              browse to upload
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          <div className="btn bg-primary text-white mt-8 btn-lg rounded-full text-sm p-4 hover:bg-white hover:text-primary border-none">
            Upload Photo
          </div>

          <div className="text-xs text-black font-light mt-1 text-center">
            File must be JPEG, JPG, PNG or WebP and up to 40MB
          </div>
        </div>
      </div>

      {/* {preview && (
        <div className="mt-6">
          <img
            src={preview}
            alt="Preview"
            className="max-h-60 rounded-lg shadow"
          />
        </div>
      )}

      {loading && <p className="text-blue-400 mt-4">Uploading...</p>} */}
    </>
  );
};

export default ScratchClassifyImage;
