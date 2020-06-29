import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    // return <div> Loading...</div>;
    return (
      <div>
        <div className="ui active inverted dimmer">
          <div className="ui loader"></div>
        </div>
      </div>
    );
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="Video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h3 className="header"> {video.snippet.title} </h3>
        <p> {video.snippet.description} </p>
      </div>
    </div>
  );
};

export default VideoDetails;
