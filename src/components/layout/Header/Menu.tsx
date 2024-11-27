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
      <span className="block p-2 transition-all duration-200 ease-in-out hover:text-red-800">
        {title}
      </span>
      <ul
        className={`absolute left-0 bg-[#797979] shadow-lg z-20 space-y-2 transition-all duration-300 ease-in-out border-t-4 border-bg-[#797979]   ${submenuVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-90 translate-y-4 pointer-events-none"
          }`}
      >
        {submenuItems.map((item, index) => (
          <li
            key={item}
            className={`transition-transform duration-300 ease-in-out transform ${submenuVisible
              ? `opacity-100 scale-100 translate-y-0 delay-[${index * 150}ms]`
              : "opacity-0 scale-75 -translate-y-4"
              }`}
          >
            <span className="block p-3  transition-all duration-200 ease-in-out hover:bg-[#0000006b] text-white hover:text-white">
              {item} 
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Menu;