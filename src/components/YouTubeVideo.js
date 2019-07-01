import React from "react";

const YoutubeVideo = ({ youtubeId }) => {
  const opts = {
    height: "590",
    width: "900",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  return (
    // <div>
    //   {/* <YoutubeVideo url="https://www.youtube.com/watch?v=SK8j8mzcn2A" /> */}
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        marginLeft: 20,
        marginRight: 20,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,

          width: "100%",
          height: "100%",
          margin: "0 auto"
        }}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        // src="https://www.youtube.com/watch?v=3Wf29RiKp70"
        frameBorder="0"
        allowfullscreen="allowfullscreen"
      />
    </div>

    // <YouTube videoId={youtubeId} opts={opts} onReady={onReady} />
  );
};

const onReady = event => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
};

export default YoutubeVideo;
