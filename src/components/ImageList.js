import React from "react"
import "./ImageList.css"
import ImageCard from "./ImageCard"
import { useImagesContext } from "../hooks/useImagesContext"

const ImageList = () => {
  const { images } = useImagesContext()

  return (
    <div className="image-list">
      {images && images.map((image) => (
        <ImageCard image={image} key={image.id} />
      ))}
    </div>
  )
}

export default ImageList
