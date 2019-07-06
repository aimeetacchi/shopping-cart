import React from "react";
import { CartItem } from "./cart-item";

export function CartItemList({ items, changeItemQuantity }) {
  return (
    <ul className="cart-item-list">
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onChangeQuantity={quantity => changeItemQuantity(item.id, quantity)}
        />
      ))}
    </ul>
  );
}
