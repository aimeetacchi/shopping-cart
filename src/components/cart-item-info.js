import React from "react";

export function CartItemInfo({ item }) {
  return (
    <div className="cart-item-info">
      <div className="cart-item-info-img" />
      <div className="cart-item-info-desc">
        <span className="cart-item-info-name">{item.name}</span>
        <span>&pound;{item.value.toFixed(2)}</span>
      </div>
    </div>
  );
}
