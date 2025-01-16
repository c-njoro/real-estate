import Image from "next/image";
import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

interface PhotoSliderProps {
  images: string[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const showPhoto = (index: number) => {
    setCurrentIndex(index);
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="photo-slider w-full h-max min-h-screen flex flex-col justify-start items-center">
      {/* Main Photo */}
      <div className="main-photo w-full h-[calc(60vh)] relative flex-col justify-start items-center">
        <div className="w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            width={1000}
            height={1000}
            loading="lazy"
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div className="slider-buttons w-fit h-max absolute top-1/2 left-0 transform -translate-y-1/2 flex flex-row justify-between items-center">
          <button
            onClick={prevPhoto}
            className="bg-background text-foreground text-4xl shadow-md"
          >
            <GrFormPrevious />
          </button>
        </div>
        <div className="slider-buttons w-fit h-max absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-row justify-between items-center">
          <button
            onClick={nextPhoto}
            className="bg-background text-foreground text-4xl shadow-md"
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail-container flex flex-row justify-start items-center h-[calc(15vh)] w-full overflow-x-auto gap-3 p-5">
        {images.map((image, index) => (
          <div key={index} className="w-40 h-full">
            <Image
              className={`thumbnail ${
                index === currentIndex ? "border-2 border-green-500" : ""
              } object-cover h-full`}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => showPhoto(index)}
              width={200}
              height={200}
            ></Image>
          </div>
        ))}
      </div>

      {/* Buttons */}
    </div>
  );
};

export default PhotoSlider;
