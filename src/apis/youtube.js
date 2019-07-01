import axios from "axios";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const youtube = channel => {
  return axios.get({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
      id: channel,
      part: "snippet",
      key: YOUTUBE_API_KEY
    }
  });
};

export default youtube;
