import React, { useState } from "react";
import toast from "react-hot-toast";

export interface VideoPrediction {
  video_url: string; // returned file download URL from backend
}

// ✅ Get BASE_URL from .env
const BASE_URL = process.env.REACT_APP_BASE_URL

export function useClassifyVideo() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<VideoPrediction | null>(null);

  const uploadFile = async (file: File) => {
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setLoading(true);

    // Clean up previous prediction URL if exists
    if (prediction?.video_url) {
      URL.revokeObjectURL(prediction.video_url);
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${BASE_URL}/predict/video/`, {
        method: "POST",
        body: formData,
        headers: {
          // Don't set Content-Type, let browser set it for FormData
        }
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Server error: ${res.status} - ${errorText}`);
      }

      // Check if response is actually a video
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('video')) {
        console.warn('Response is not a video, content-type:', contentType);
      }

      // Convert response to blob with explicit type
      const blob = await res.blob();
      
      // Create blob with explicit video/mp4 type if not already set
      const videoBlob = blob.type.includes('video') ? blob : new Blob([blob], { type: 'video/mp4' });
      
      const video_url = URL.createObjectURL(videoBlob);
      setPrediction({ video_url });
      
      console.log('Video blob created:', {
        size: videoBlob.size,
        type: videoBlob.type,
        url: video_url
      });
      
    } catch (err: unknown) {
      console.error("❌ Failed to classify video", err);
      toast.error("❌ Failed to classify video. Please try again.");
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

  // Clean up object URLs on unmount
  React.useEffect(() => {
    return () => {
      if (prediction?.video_url) {
        URL.revokeObjectURL(prediction.video_url);
      }
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, []);

  return {
    selectedFile,
    preview,
    loading,
    handleFileChange,
    handleDrop,
    handleDragOver,
    prediction,
  };
}