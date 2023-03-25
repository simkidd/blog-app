import React from "react";
import ImageGallery from "../components/home/ImageGallery";
import RecentPosts from "../components/home/RecentPosts";
// import {data} from "../data/blogs.json";
import {BlogsData} from '../data/BlogsData'

const Home = () => {
  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + "px",
    overflow: "hidden",
  };

  const sideImageHeight = galleryHeight / 3;

  const imgArr = BlogsData.map((blog) => blog.image);

  return (
    <div>
      <div className="bg-white box-border p-5">
        <ImageGallery
          largeWidth="70%"
          smallWidth="30%"
          sideImageHeight={sideImageHeight}
          galleryStyle={galleryStyle}
          imagesArray={imgArr}
        />
      </div>

        <div className="mt-5">
          <RecentPosts BlogsData={BlogsData} />
        </div>
    </div>
  );
};

export default Home;
