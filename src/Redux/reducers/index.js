import { combineReducers } from "redux";
import { updateDestination, updateTime } from "./flightReducer";

const reducers = combineReducers({
  destination: updateDestination,
  time: updateTime,
});

export default reducers;
