import { LOGIN_SUCCESS } from "../actions/authActions";

export const setToken = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem("token", action.payload);
  }
  next(action);
};

export default setToken;
