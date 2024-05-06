import React from "react";

const Video = ({ src, autoPlay, controls }) => {
  return (
    <video
      autoPlay={autoPlay}
      controls={controls}
      style={{
        width: "100%",
        height: "100%",
        clipPath: "url(#myClipPath)",
        WebkitClipPath: "url(#myClipPath)",
      }}
      muted
      loop
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
