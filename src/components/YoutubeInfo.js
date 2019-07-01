import React from "react";
const YouTube = require("simple-youtube-api");

const YoutubeInfo = props => {
  console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
  const youtube = new YouTube(process.env.REACT_APP_YOUTUBE_API_KEY);

  youtube
    .getChannel("https://www.youtube.com/channel/UC68GPKqwj-F6acTMYxZb0bA")
    .then(video => {
      console.log(`The channel's title is ${video.title}`);
    })
    .catch(console.log);
  return <div>YoutubeInfo</div>;
};

export default YoutubeInfo;
