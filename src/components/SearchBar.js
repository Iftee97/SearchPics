import React, { useState } from "react"
import { searchImages } from "../api"
import { useImagesContext } from "../hooks/useImagesContext"

const SearchBar = () => {
  const [term, setTerm] = useState("")
  const { dispatch } = useImagesContext()

  const onFormSubmit = async (event) => {
    event.preventDefault()
    const images = await searchImages(term)
    dispatch({ type: "SET_IMAGES", payload: images })
  }

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search:</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
