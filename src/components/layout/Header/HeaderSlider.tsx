"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://talasari.zppalghar.in/pdfs/1502859245.jpeg",
    caption: "First Slide",
  },
  {
    url: "https://talasari.zppalghar.in/pdfs/1499245175.jpg",
    caption: "Second Slide",
  },
  {
    url: "https://talasari.zppalghar.in/pdfs/1502859375.jpeg",
    caption: "Third Slide",
  }
];

const HeaderSlider = () => {
  return (
    <div className="slide-container w-full  overflow-hidden">
      <Slide autoplay={true} duration={3000} transitionDuration={500} >
        {slideImages.map((slide, index) => (
          <div key={index} className="relative h-full">
            <img
              src={slide.url}
              alt={`Slide ${index + 1}`}
              className=" w-full h-96"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default HeaderSlider;
