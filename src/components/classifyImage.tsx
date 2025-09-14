import React from "react";

function ClassifyImage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-3 md:px-36">
      <div className="font-bold font-heading text-3xl  md:text-5xl text-center text-blue-100 mt-48 md:mt-0">
        Classify Emotion from Image
      </div>
      <div className="mt-4 text-gray-300 text-sm md:text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis
        sagittis consequat. Sed tristique ligula massa, eget lacinia eros
        convallis ut.
      </div>
      <div className="mt-24 w-full  md:w-1/2 bg-gray-200 sm-shadow h-96 rounded-2xl flex items-center justify-center p-6">
        <div className="bg-gray-200 border-4 border-gray-500 border-dashed rounded-2xl w-full h-full flex flex-col items-center justify-center p-12">
          <div className="text-2xl font-heading font-semibold text-center">
            Drag and drop an image or{" "}
            <span className="text-primary font-bold">browse to upload</span>
          </div>
          <button className="btn bg-primary text-white mt-8 btn-lg rounded-full text-sm p-8 hover:bg-white hover:text-primary border-none">
            Upload Photo
          </button>
          <div className="text-xs text-black font-light mt-1 text-center">
            File must be JPEG, JPG, PNG or WebP and up to 40MB
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassifyImage;
