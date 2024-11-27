"use client";
// components/Card.tsx

import { useState, useEffect } from "react";

// Define the types for the props
interface PdfDetailProps {
  title: string;
  items: string[];
  additionalData: string; // New prop for additional data
}

const PdfDetail: React.FC<PdfDetailProps> = ({ title, items, additionalData }) => {
  const [isVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true); // New state for animation control
  const [color, setColor] = useState("text-red-500"); // State for color

  // Colors to cycle through
  const colors = ["text-red-500", "text-green-500", "text-blue-500", "text-yellow-500", "text-purple-500"];

  // Effect to change color every second
  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) => {
        const currentIndex = colors.indexOf(prev);
        return colors[(currentIndex + 1) % colors.length];
      });
    }, 1000); // Change color every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-80 border rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-200 p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="relative h-60 overflow-hidden bg-white">
        <div
          className={`absolute transition-transform duration-1000 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <div
            className={`marquee ${isAnimating ? "visible" : ""} ${isAnimating ? "" : "paused"
              }`}
            onMouseEnter={() => setIsAnimating(false)} // Stop animation on mouse enter
            onMouseLeave={() => setIsAnimating(true)} // Resume animation on mouse leave
          >
            <h3 className="font-bold">Rules and Regulations</h3>
            <ul className="list-none p-0">
              {items.map((item, index) => (
                <li key={index} className="flex items-center mb-2">
                  <span className="mr-2 text-green-500">👉</span>
                  <a href={`#${index + 1}`} className="text-blue-600 hover:underline">{item}</a><img src="/assets/gif/new.gif"></img>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* New section for additional data with animation */}
      <div className={`p-4 transition-all duration-500 ${color} opacity-100`}>
        <h4 className="font-semibold">Additional Information:</h4>
        <p>{additionalData}</p>
      </div>

      {/* Add CSS for marquee effect and animations */}
      <style jsx>{`
        .marquee {
          animation: marquee 10s linear infinite;
          display: flex;
          flex-direction: column;
        }

        @keyframes marquee {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .paused {
          animation-play-state: paused; /* Pause animation */
        }

        .visible {
          animation-play-state: running; /* Ensure animation runs when visible */
        }

        /* Adding a fade-in effect */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .fade-in {
          animation: fadeIn 1s ease-in-out forwards; /* Fade in effect */
        }
      `}</style>
    </div>
  );
};

export default PdfDetail;