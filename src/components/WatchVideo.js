import React from "react";
import YouTubeVideo from "./YouTubeVideo";
import DisqusEmbed from "./DisqusEmbed";

const WatchVideo = props => {
  console.log(props);

  let disqusShortname = props.default
    ? "unsilenced"
    : props.match.params.username;

  const disqusConfig = {
    url: `https://unsilenced.netlify.com${props.location.pathname}`,
    id: props.match.params.videoID
  };

  return (
    <>
      <YouTubeVideo youtubeId={props.match.params.videoID} />
      <DisqusEmbed
        disqusShortname={disqusShortname}
        disqusConfig={disqusConfig}
      />
    </>
  );
};

export default WatchVideo;
