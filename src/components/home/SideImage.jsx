import React from "react";

const SideImage = (props) => {
  const { height, src } = props;

  return (
    <>
      <div className="w-full h-[450px] box-border" style={{ height: `${height}px` }}>
        <img src={src} alt="" className="w-full h-full object-cover" />
      </div>
    </>
  );
};

export default SideImage;
