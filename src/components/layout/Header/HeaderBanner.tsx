// components/HeaderBanner.tsx
"use client"; // Ensure this component runs in a client environment
import React from "react";
import Menu from "./Menu"; // Adjust the import path as necessary

const HeaderBanner: React.FC = () => {
  return (
    <div
      className="relative bg-cover h-11 bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/abstract-particle-structure-background_532781-693.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center animate-fade-in">
        <ul className="flex space-x-8">
          <Menu title="About District" submenuItems={["History", "Mission", "Vision"]} />
          <Menu title="RIT Online" submenuItems={["Programs", "Admissions", "Support"]} />
          <Menu title="RIT Online" submenuItems={["Programs", "Admissions", "Support"]} />
          <Menu title="RIT Online" submenuItems={["Programs", "Admissions", "Support"]} />
          <Menu title="RIT Online" submenuItems={["Programs", "Admissions", "Support"]} />
          <Menu title="RIT Online" submenuItems={["Programs", "Admissions", "Support"]} />
          <Menu title="RIT Online" submenuItems={["Programs", "Admissions", "Support"]} />
        </ul>
      </div>
      
    </div>
  );
};

export default HeaderBanner;