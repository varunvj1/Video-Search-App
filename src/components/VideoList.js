import React from "react";
import VideoItem from "./VideoItem";

//In ES2015, props.videos.length can be written as videos.length , by replacing props by videos
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}
      />
    );
    // console.log(video);
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
