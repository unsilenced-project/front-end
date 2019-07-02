import * as types from "../actions/userTypes";

const initialState = {
  userData: [],
  loading: false,
  error: null
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
    case types.UPDATE_USER_SUCCESS:
      return {};
    case types.STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
