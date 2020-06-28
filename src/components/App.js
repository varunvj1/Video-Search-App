import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api(s)/Youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = {
    videos: [],
    videoSelected: null
  };

  componentDidMount() {
    this.onTermSubmit("news delhi COVID");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        key: "AIzaSyD3Eoaz_vivmqEpZct886oejTxGndIYCrg"
      }
    });
    this.setState({
      videos: response.data.items,
      videoSelected: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    // console.log("Coming from App", video);
    this.setState({ videoSelected: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.videoSelected} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
