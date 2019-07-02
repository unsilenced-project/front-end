import axiosWithAuth from "../../utils/axiosConfig";
import * as types from "./userTypes";

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

  
};
