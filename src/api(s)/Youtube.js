import axios from "axios";

// const API_KEY = "AIzaSyD3Eoaz_vivmqEpZct886oejTxGndIYCrg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5
    // key: "AIzaSyD3Eoaz_vivmqEpZct886oejTxGndIYCrg"
  }
});
