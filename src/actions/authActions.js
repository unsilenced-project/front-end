import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const CREATE_START = "CREATE_START";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_ERROR = "CREATE_ERROR";
export const FORGOT_PASS_START = "FORGOT_PASS_START";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://unsilenced.herokuapp.com/login", creds)
    .then(response => {
      console.log("login response", response);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.token,
        payloadWithAllUserData: response.data
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", creds.username);
    })
    .catch(error => {
      console.log("login error.message", error.response.data.message);
      dispatch({ type: LOGIN_ERROR, payload: error.response.data });
    });
};

export const logout = () => {
  // To be completed
  return {
    type: LOGOUT
  };
};

export const createAccount = creds => dispatch => {
  console.log(creds);
  dispatch({ type: CREATE_START });
  return axios
    .post("https://unsilenced.herokuapp.com/register/", creds)
    .then(response => {
      console.log("createAccount response", response);
      localStorage.setItem("username", creds.username);
      if (creds.disqus_name)
        localStorage.setItem("disqusShortname", creds.disqus_name);
      dispatch({ type: CREATE_SUCCESS, payload: response.data.payload });
    })
    .catch(error => {
      console.log("createAccount error.message", error.response.data.message);
      dispatch({ type: CREATE_ERROR, payload: error.response.data });
    });
};

export const forgotPass = email => dispatch => {};
