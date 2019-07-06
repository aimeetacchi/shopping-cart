import React from "react";
import { Counter } from "./counter";
import { NumericDisplay } from "./numeric-display";

export function CartItemQuantityCounter({ value, onChange }) {
  return (
    <div className="cart-item-quantity-counter">
      <Counter
        onIncrement={() => onChange(value + 1)}
        onDecrement={() => onChange(value <= 1 ? value : value - 1)}
      />
      <NumericDisplay title="QTY" value={value} />
    </div>
  );
}
