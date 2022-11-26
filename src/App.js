import React from "react"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar />
      <ImageList />
    </div>
  )
}

export default App
