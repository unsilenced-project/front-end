import axiosWithAuth from "./axiosConfig";
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
      dispatch({ type: types.GET_USER_BY_ID_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.GET_USER_BY_ID_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch(stopLoading());
    });
};

export const updateUser = (id, userData) => dispatch => {
  dispatch(startLoading());

  axiosWithAuth()
    .get(`${baseURL}/${id}`, userData)
    .then(res => {
      debugger;
      dispatch({ type: types.UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      debugger;
      dispatch({ type: types.UPDATE_USER_FAIL, payload: err.message });
    })
    .finally(() => {
      dispatch(stopLoading());
    });
};


