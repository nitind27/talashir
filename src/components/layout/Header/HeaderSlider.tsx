"use client";
import Image from "next/image";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://goicharters.nic.in/public/adminimg/siteimg/banner1-azadi1.jpg",
    caption: "First Slide",
  },
  {
    url: "https://gcsmc.org/assets/images/banner/government-banner.jpg",
    caption: "Second Slide",
  },
  {
    url: "https://www.nic.in/wp-content/uploads/2022/09/eAuction-India-slider-23.jpg",
    caption: "Third Slide",
  },
];

const HeaderSlider = () => {
  return (
    <div className="slide-container w-full h-[400px] overflow-hidden">
      <Slide autoplay={true} duration={3000} transitionDuration={500}>
        {slideImages.map((slide, index) => (
          <div key={index} className="relative h-full">
            <Image
              src={slide.url}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default HeaderSlider;
