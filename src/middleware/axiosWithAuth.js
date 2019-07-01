import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    // baseURL: "https://cors-anywhere.herokuapp.com/https://redux-friends.herokuapp.com/api"
    // baseURL: "http://localhost:5000/api"
    baseURL: "https://unsilenced.herokuapp.com"
  });
};

export default axiosWithAuth;
