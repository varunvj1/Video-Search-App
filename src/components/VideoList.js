import React from "react";
import VideoItem from "./VideoItem";

//In ES2015, props.videos.length can be written as videos.length , by replacing props by videos
const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />;
    // console.log(video);
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
