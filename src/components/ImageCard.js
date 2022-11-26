import React, { useState, useEffect, useRef } from "react"

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0)
  const imageRef = useRef()

  const setGridSpans = () => {
    const height = imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)
    setSpans(spans)
  }

  useEffect(() => {
    imageRef.current.addEventListener("load", setGridSpans)
  }, [])

  const { urls, alt_description } = image
  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img
        src={urls.regular}
        alt={alt_description}
        ref={imageRef}
      />
    </div>
  )
}

export default ImageCard
