import React from "react";

const Video = ({ src, autoPlay, controls }) => {
  return (
    <video
      autoPlay={autoPlay}
      controls={controls}
      style={{
        width: "100%",
        height: "auto",
      }}
      muted
      loop
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
