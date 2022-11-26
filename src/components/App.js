import React, { useState } from "react";
import axios from "axios"; // installed using npm
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { 
        query: term 
      },
      headers: {
        Authorization: "Client-ID W05zb4dPUhkcz2iGqkgtJz0yg1Z11MNtTy0qk94Ua1k",
      },
    });
    setImages(response.data.results);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;

// unsplash api key: W05zb4dPUhkcz2iGqkgtJz0yg1Z11MNtTy0qk94Ua1k
