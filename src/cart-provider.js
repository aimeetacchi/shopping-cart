import React, { useReducer } from "react";
import { CartContext } from "./cart-context";

export const initialCart = [
  {
    id: 1,
    name: "T-Shirt",
    value: 2.99,
    quantity: 1
  },
  {
    id: 2,
    name: "Laptop",
    value: 499.99,
    quantity: 1
  },
  {
    id: 3,
    name: "Water",
    value: 1.99,
    quantity: 1
  }
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_ITEM_QUANTITY":
      // Map over the items in the state, when we find the one to change,
      // spread it's content into a new object and set the quantity to the
      // specified value.
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const changeItemQuantity = (id, quantity) => {
    dispatch({
      type: "CHANGE_ITEM_QUANTITY",
      id,
      quantity
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        changeItemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
