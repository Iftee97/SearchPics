import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const imagesList = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{imagesList}</div>;
};

export default ImageList;
