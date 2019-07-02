import axiosWithAuth from "../../utils/axiosConfig";
import * as types from "./userTypes";

const baseURL = "https://unsilenced.herokuapp.com/users";

const startLoading = () => {
  return {
    type: types.START_LOADING
  };
};

const stopLoading = () => {
  return {
    type: types.STOP_LOADING
  };
};

export const getUserById = id => dispatch => {
  dispatch(startLoading());

  axiosWithAuth()
    .get(`${baseURL}/${id}`)
    .then(res => {
      debugger;
    })
    .catch(err => {
      debugger;
    })
    .finnaly(() => {
      dispatch(stopLoading());
    });
};
