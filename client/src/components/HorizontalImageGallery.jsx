import React from "react";

const imageList = [
  "1.svg",
  "new2.png",
  "3.svg",
  "4.svg",
  "5.svg",
  "6.svg",
  "7.svg",
  "8.svg",
];

const HorizontalImageGallery = () => {
  return (
    <div className="grid grid-cols-8 w-full h-48 gap-2">
      {imageList.map((img, index) => (
        <div
          key={index}
          className="flex items-center justify-center  "
        >
          <img
            src={`/images/${img}`}
            alt={`Image ${index + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalImageGallery;
