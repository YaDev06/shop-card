import React from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART": {
      const index = state.order.findIndex((e) => e.id === payload.id);

      let newMass = null;
      if (index < 0) {
        const newOrder = {
          ...payload,
          quantity: 1,
        };
        newMass = [...state.order, newOrder];
      } else {
        newMass = state.order.map((value, idx) => {
          if (idx === index) {
            return {
              ...value,
              quantity: value.quantity + 1,
            };
          } else {
            return value;
          }
        });
      }
      return {
        ...state,
        order: newMass,
      };
      
    }
    case "SET_DATA": {
      return {
        ...state,
        data: payload,
      };
    }
    case "REMOVE": {
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    }

    case "CHANGE_MODAL": {
      return {
        ...state,
        modal: !state.modal,
      };
    }

    case "INCREMENT": {
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: item.quantity+1,
            };
          } else {
            return item;
          }
        }),
      };
    }

    case "DECREMENT": {
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: item.quantity <= 0 ? 0 : item.quantity-1,
            };
          } else {
            return item;
          }
        }),
      };
    }

    default:
      return state;
  }
};

export default reducer;
