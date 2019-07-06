import React from "react";
import { CartItemInfo } from "./cart-item-info";
import { CartItemQuantityCounter } from "./cart-item-quantity-counter";

export function CartItem({ item, onChangeQuantity }) {
  return (
    <li className="cart-item">
      <CartItemInfo item={item} />
      <CartItemQuantityCounter
        value={item.quantity}
        onChange={onChangeQuantity}
      />
    </li>
  );
}
