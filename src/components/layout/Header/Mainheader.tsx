import Socialmedia from "@/components/SocialMedia/Socialmedia";
import React from "react";

const Mainheader = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white py-1">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            {" "}
            <Socialmedia />
          </h1>

          <nav>
            <ul className="flex items-center space-x-6 md:text-[10px]">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 transition duration-200"
                >
                  + A
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 transition duration-200"
                >
                  - A
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 transition duration-200"
                >
                  A
                </a>
              </li>
              <li>
                <select className="bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 hover:bg-gray-600 transition duration-200">
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Marathi">Marathi</option>
                </select>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Mainheader;
