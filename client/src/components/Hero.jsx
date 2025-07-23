import React, { useState } from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import { GoDotFill } from "react-icons/go";

const Hero = () => {
  const images = [hero1, hero2];
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  const next = () =>
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-4">
      <div className="relative overflow-hidden w-full h-80 bg-slate-300 rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`Slide ${idx}`}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center text-2xl mt-3 space-x-2">
        {images.map((_, idx) => (
          <GoDotFill
            key={idx}
            className={`cursor-pointer ${
              idx === index ? "text-blue-500" : "text-slate-400"
            }`}
            onClick={() => setIndex(idx)}
          />
        ))}
        <div className="flex space-x-2 ml-4">
          <GoDotFill className="cursor-pointer" onClick={prev} />
          <GoDotFill className="cursor-pointer" onClick={next} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
