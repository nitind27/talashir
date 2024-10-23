
"use client"
import React, { useEffect, useState } from 'react';

const messages = [
  "This is the first sliding message!",
  "Here comes the second message!",
  "And this is the third message!",
];

const Slidemassage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isHovered) {
      interval = setInterval(() => {
        setVisible(false);
        // Change to the next message after a delay
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
          setVisible(true);
        }, 700); // Wait for the animation to finish before showing the next message
      }, 3000); // Change message every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={`transform transition-transform duration-700 ease-in-out ${visible ? 'translate-x-0' : '-translate-x-full'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="bg-purple-950 text-white p-2 shadow-lg">
          {messages[currentIndex]}
        </p>
      </div>
    </div>
  );
};

export default Slidemassage;