import React from "react";

const initialState = {
  error: false,
  loading: false,
  value: "",
  currentView: "home",
};

const reducer = (state, action) => {
  console.log("Si");

  switch (action.type) {
    case "UPDATE_VIEW":
      console.log("Hasdasd");
      return {
        ...state,
        currentView: action.view,
      };

    case "TOGGLE_ERROR":
      return {
        ...state,
        error: action.error,
      };

    case "TOGGLE_LOADING":
      return {
        ...state,
        loading: action.loading,
      };
  
    default:
      return state;
  }
}

const useStateManagement = () => React.useReducer(reducer, initialState);

export { useStateManagement };