'use client';

import { useState, useEffect } from "react";
import CarSlider from "./CarSlider";
import HeaderContent from "./HeaderContent";

const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setIsClient(true); // Set client-side flag after component mounts
  }, []);

  const handleSliderChange = (event) => {
    const newPosition = event.target.value;
    setPosition(Number(newPosition));
  };

  // Render a loading state until client-side hydration is complete
  if (!isClient) {
    return (
      <nav className="bg-plum text-white py-2 min-h-[200px] flex justify-center items-center">
        <span>Loading...</span>
      </nav>
    );
  }

  return (
    <>
      <HeaderContent position={position} />
      <div className="hidden sm:block">
        <CarSlider
          position={position}
          handleSliderChange={handleSliderChange}
        />
      </div>
    </>
  );
};

export default Header;
