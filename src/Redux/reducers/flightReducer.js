import { ActionTypes } from "../constants/action-types";

const initialState = {
  from: "",
  to: "",
  arrivalTime: new Date().getTime(),
  departureTime: new Date().getTime(),
};

export const updateDestination = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FROM:
      console.log('from payload', payload)
      return { ...state, from: payload };
    case ActionTypes.SET_TO:
      console.log('to payload', payload)
      return { ...state, to: payload };
    default:
      return state;
  }
};

export const updateTime = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DEPARTURE_TIME:
      console.log('departure payload', payload)
      return { ...state, departureTime: payload };
    case ActionTypes.SET_ARRIVAL_TIME:
      console.log('arrival payload', payload)
      return { ...state, arrivalTime: payload };
    default:
      return state;
  }
};
