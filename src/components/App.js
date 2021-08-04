import React, { Component } from "react";
import axios from "axios"; // installed using npm
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };

  // the above shorter version is the same as below
  onSearchSubmit = async (term) => { // arrow function because 'this' causes an issue
    // console.log(term);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID W05zb4dPUhkcz2iGqkgtJz0yg1Z11MNtTy0qk94Ua1k"
      }
    });
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  }

  // a more shorter way of doing the above (works perfectly):
  // onSearchSubmit = async (term) => { // arrow function because 'this' causes an issue
  //   // console.log(term);
  //   const apiKey = "W05zb4dPUhkcz2iGqkgtJz0yg1Z11MNtTy0qk94Ua1k"; // from unsplash
  //   const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${term}`); // reference link from unsplash
  //   // console.log(response.data.results);
  //   this.setState({ images: response.data.results });
  // }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>

        {/* below, we are passing a callback onSearchSubmit(term) as a prop to the SearchBar component. 
        the SearchBar component recieves this prop and updates the term to be the search term there from form submission.  */}
        <SearchBar runMeWhenUserSubmits={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div >
    );
  }
}

export default App;

// unsplash api key: W05zb4dPUhkcz2iGqkgtJz0yg1Z11MNtTy0qk94Ua1k