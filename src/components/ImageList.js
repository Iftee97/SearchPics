import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  // console.log(props); console.log(props.images);

  const imagesList = props.images.map((image) => {
    // return <img key={image.id} src={image.urls.regular} alt={image.alt_description} />
    return <ImageCard key={image.id} image={image} />
  });

  return (
    <div className="image-list">{imagesList}</div>
  );
};

export default ImageList;