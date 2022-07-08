import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

export const CardContext = createContext();

const state = {
  data: [],
  order: [],
  modal: false,
};

export const CardContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, state);

  value.getItem = (items) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: items,
    });
  };

  value.setData = (data) => {
    dispatch({
      type: "SET_DATA",
      payload: data,
    });
  };

  value.remove = (id) => {
    dispatch({
      type: "REMOVE",
      payload: { id },
    });
  };

  value.changeModal = () => {
    dispatch({
      type: "CHANGE_MODAL",
    });
  };

  value.incr = (id) => {
    dispatch({
      type: "INCREMENT",
      payload: { id },
    });
  };
  value.decr = (id) => {
    dispatch({
      type: "DECREMENT",
      payload: { id },
    });
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
