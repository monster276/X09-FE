import React, { useReducer } from "react";
import axios from "axios";
import LocationContext from "./LocationContext";
import LocationReducer from "./LocationReducer";
import { GET_LOCATIONS, LOCATION_ERROR } from "../types";

const LocationState = (props) => {
  const initialState = {
    locations: [],
    error: null,
  };

  const [state, dispatch] = useReducer(LocationReducer, initialState);

  const getLocations = async () => {
    try {
      const res = await axios.get("https://x09-be.onrender.com/api/locations");
      dispatch({
        type: GET_LOCATIONS,
        payload: res.data.locations,
      });
    } catch (error) {
      dispatch({
        type: GET_LOCATIONS,
        payload: error.response.data.message,
      });
    }
  };

  return (
    <LocationContext.Provider
      value={{ getLocations, locations: state.locations }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationState;
