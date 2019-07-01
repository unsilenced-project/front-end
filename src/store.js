import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import axiosWithAuth from "./middleware/axiosWithAuth";
import setToken from "./middleware/setToken";
import rooterReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rooterReducer,
  composeEnhancers(applyMiddleware(thunk, setToken, logger))
);

export default store;
