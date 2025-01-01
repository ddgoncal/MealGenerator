import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface CameraScannerProps {
  onScan: (ingredients: string[]) => void;
  onClose: () => void;
}

export const CameraScanner: React.FC<CameraScannerProps> = ({ onScan, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let stream: MediaStream;

    async function setupCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        onClose();
      }
    }

    setupCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [onClose]);

  const captureImage = async () => {
    if (!videoRef.current) return;

    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    
    const context = canvas.getContext('2d');
    if (!context) return;

    context.drawImage(videoRef.current, 0, 0);
    
    // Here you would typically send the image to your backend for processing
    // For now, we'll simulate a response
    onScan(['Apple', 'Orange', 'Milk']);
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full rounded-lg"
      />
      
      <div className="absolute top-2 right-2">
        <button
          onClick={onClose}
          className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <button
        onClick={captureImage}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2
          bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        Capture
      </button>
    </div>
  );
};