"use client"
import React, { useState } from "react";

interface MenuProps {
  title: string;
  submenuItems: string[];
}

const Menu: React.FC<MenuProps> = ({ title, submenuItems }) => {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    setSubmenuVisible(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer"
    >
      {title}
      <ul
        className={`absolute left-0 bg-white border border-purple-300 p-2 rounded shadow-lg z-20 space-y-2 transition-all duration-300 ease-in-out ${
          submenuVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        }`}
      >
        {submenuItems.map((item, index) => (
          <li
            key={item}
            className={`transition-transform duration-300 ease-in-out transform ${
              submenuVisible
                ? `opacity-100 scale-100 translate-y-0 delay-[${index * 150}ms]`
                : "opacity-0 scale-75 -translate-y-4"
            }`}
          >
            <span className="block p-2 rounded transition-all duration-200 ease-in-out bg-white text-black hover:bg-black hover:text-white border-b border-gray-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Menu;