import React, { useState } from "react";
import toast from "react-hot-toast";

export interface FacePrediction {
  face_id: number;
  label: string;
  score: number;
  all_predictions: { label: string; score: number }[];
  face_image_base64: string;   
}

// ✅ Get BASE_URL from .env
const BASE_URL = process.env.REACT_APP_BASE_URL

console.log(BASE_URL)

export interface Prediction {
  faces: FacePrediction[];
  image_base64: string; 
}

export function useClassifyImage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<Prediction | null>(null);

  const uploadFile = async (file: File) => {
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${BASE_URL}/predict/`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      const data: Prediction = await res.json();
      setPrediction(data);
    } catch (err: unknown) {
      console.error("Failed to classify image", err);
      toast.error("❌ Failed to classify image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return {
    selectedFile,
    preview,
    loading,
    handleFileChange,
    handleDragOver,
    handleDrop,
    uploadFile,
    prediction,
  };
}
