import { GET_LOCATIONS, LOCATION_ERROR } from "../types";

const LocationReducer = (state, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        loading: false,
      };
    case LOCATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default LocationReducer;
