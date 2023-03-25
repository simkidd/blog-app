import React from "react";
import SideImage from "./SideImage";

const ImageGallery = (props) => {
  const { galleryStyle, imagesArray, largeWidth, smallWidth, sideImageHeight } =
    props;

  return (
    <>
      <div className="flex justify-between" style={galleryStyle}>
        <div style={{ width: largeWidth }}>
          <div className="w-full h-full">
            <img
              src={imagesArray[4]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div style={{ width: smallWidth }}>
          {imagesArray.map((image) => {
            return <SideImage height={sideImageHeight} src={image} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
