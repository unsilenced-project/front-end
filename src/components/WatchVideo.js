import React from "react";
import YouTubeVideo from "./YouTubeVideo";
import DisqusEmbed from "./DisqusEmbed";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

const WatchVideo = props => {
  let { username, videoID } = props.match.params;
  let disqusShortname = props.default ? "unsilenced" : username;

  console.log(props.location);
  if (props.location.search) videoID = props.location.search.replace("?v=", "");

  const disqusConfig = {
    url: `https://unsilenced.netlify.com${videoID}`,
    id: videoID
  };

  return (
    <>
      <Navigation />
      <YouTubeVideo youtubeId={videoID} />
      <DisqusEmbed
        disqusShortname={disqusShortname}
        disqusConfig={disqusConfig}
      />
      <Footer />
    </>
  );
};

export default WatchVideo;
