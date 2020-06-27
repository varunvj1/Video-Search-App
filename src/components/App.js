import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api(s)/Youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: []
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",

        key: "AIzaSyD3Eoaz_vivmqEpZct886oejTxGndIYCrg"
      }
    });
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
