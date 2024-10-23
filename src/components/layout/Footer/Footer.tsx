"use client"
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-2">Government Services</h3>
            <ul>
              <li><a href="#" className="hover:underline">Service 1</a></li>
              <li><a href="#" className="hover:underline">Service 2</a></li>
              <li><a href="#" className="hover:underline">Service 3</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul>
              <li><a href="#" className="hover:underline">Email</a></li>
              <li><a href="#" className="hover:underline">Phone</a></li>
              <li><a href="#" className="hover:underline">Address</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Government of india. All rights reserved.</p>
        </div>
      </div>

      {/* Animation Example */}
      <style jsx>{`
        footer {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;