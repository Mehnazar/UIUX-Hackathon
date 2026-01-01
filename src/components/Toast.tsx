"use client";

import React, { useEffect } from "react";
import { FiCheckCircle, FiX } from "react-icons/fi";

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-24 right-4 z-50 animate-slide-in">
      <div className="bg-[#2A254B] text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]">
        <FiCheckCircle className="text-green-400 text-xl flex-shrink-0" />
        <p className="flex-1 font-medium">{message}</p>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          <FiX className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
