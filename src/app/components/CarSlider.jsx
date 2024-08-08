"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { gradients } from "./gradient";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const CarSlider = () => {
  const [position, setPosition] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const { width, height } = useWindowSize();

  const handleDrag = useCallback((event) => {
    const slider = event.target.closest(".slider");
    const sliderRect = slider.getBoundingClientRect();
    let newPosition = event.clientX - sliderRect.left;
    newPosition = Math.max(0, Math.min(newPosition, sliderRect.width - 100)); // 100 is the width of the car icon

    setPosition(newPosition);

    if (newPosition >= sliderRect.width - 100) {
      setCelebrate(true);
    } else {
      setCelebrate(false);
    }
  }, []);

  const calculateValue = (pos, maxPos) => {
    const maxValue = 100; // Define the maximum value for the slider
    return Math.round((pos / maxPos) * maxValue);
  };

  // Calculate gradient index based on position
  const gradientIndex = Math.floor(
    (position / (window.innerWidth - 100)) * (gradients.length - 1)
  );

  return (
    <>
      {celebrate && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={650}
          gravity={0.03}
          recycle={false} // Confetti will not automatically reset
        />
      )}
      <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
        {/* Colorful Navbar Block */}
        <div
          className={`w-full h-16 flex items-center justify-center text-white text-xl font-bold ${gradients[gradientIndex]} transition-all ease-in-out duration-500`}
        >
          Car Slider
        </div>

        {/* Slider */}
        <div className="relative slider w-full h-10 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-b-lg">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-500 transform -translate-y-1/2" />

          {/* Finish Pin Icon */}
          <div className="absolute -right-3 transform -translate-y-1/2 -rotate-45">
            <Image src="/IPFicon.svg" alt="Finish Pin" width={75} height={70} />
          </div>

          {/* Car Icon */}
          <div
            className="absolute -top-3 left-0 transform -translate-y-1/2 cursor-pointer"
            style={{ transform: `translateX(${position}px)` }}
            draggable
            onDrag={handleDrag}
          >
            <Image src="/car.svg" alt="Car" width={100} height={100} />
          </div>
        </div>

        <div className="text-xl font-semibold mt-4">
          Value: {calculateValue(position, window.innerWidth - 100)}
        </div>
      </div>
    </>
  );
};

export default CarSlider;
