import { useReducer } from "react";
import Context from "./Context";

function Provider({ chidren }) {
  return (
    <Context.Provider value={[state, dispatch]}>{chidren}</Context.Provider>
  );
}
