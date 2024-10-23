import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 text-center mt-8">
        From the Content
      </h3>
      <div className="container mx-auto  flex flex-col md:flex-row w-[80%] border p-6">
        <div className="flex-1 p-6 flex flex-col justify-center items-center">
          <p
            className="text-gray-700 leading-relaxed text-start"
            style={{
              textAlign: "justify",
              margin: "0 auto",
              maxWidth: "800px",
            }}
          >
            I feel elated to welcome all the young and dynamic aspirants into
            the temple of learning. It is a matter of great pleasure for me to
            bring innovative techno-savvy cognition and inventions to face new
            challenges in the coming years. In the world of technology and
            digital edge, we wish to provide a sense of development, commitment,
            and values in the field of education through new horizons and
            dynamism. We seek to give highly oriented dimensions to education
            through the acceleration of new programs and innovative applications
            in the international arena as well as to move forward to make
            education dynamic by engaging all stakeholders with confidence to
            reach the desired goal with all efforts for research and
            developmental action. The aim is to endeavor for ICT-enabled
            education and integration of ethical values in life, to promote
            cultural and social impact, analytical skills, team spirit, and
            leadership skills to help students make their career paths easier
            while facing life’s challenges. In contemporary competitive times of
            higher education, we want to turn challenges into opportunities for
            future perspectives. New experiences will shape creative ways of
            learning paradigms for e-learning with a virtual e-connect
            environment. New learning outcomes will bring new hopes,
            aspirations, innovations, passion, and a positive mindset to frame a
            colorful page in life full of knowledge and learning.
          </p>
        </div>
        <div className="flex-1 relative" >
          <Image
            src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/w/z/g/small-spos8980-poster-bjp-logo-bhartiya-janta-party-with-modi-sl-original-imaghs5tcbe3ht2d.jpeg?q=90&crop=false" // Replace with your image path
            alt="Description of Image"
            layout="fill" // This makes the image fill its container
            objectFit="cover" // This keeps aspect ratio while covering area
   
          />
        </div>
      </div>
    </>
  );
};

export default Content;
