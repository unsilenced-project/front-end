import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem("userToken");

    return axios.create({
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`,
        },
        // baseURL: "https://cors-anywhere.herokuapp.com/https://redux-friends.herokuapp.com/api"
        // baseURL: "http://localhost:5000/api"
        baseURL: "https://redux-friends-web20.herokuapp.com/api/"
    });
};

export default axiosWithAuth;