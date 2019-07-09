import * as types from "../actions/userTypes";

const initialState = {
  userData: [],
  loading: false,
  error: null,
  message: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userData: action.payload
      };
    case types.GET_USER_BY_ID_FAIL:
      return {
        ...state,
        loading: false
      };
    case types.UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false
      };
    case types.STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case types.FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case types.FORGET_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
