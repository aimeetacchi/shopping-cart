import React from "react";
import { IncrementIcon } from "./increment-icon";
import { DecrementIcon } from "./decrement-icon";

export function Counter({ onIncrement, onDecrement }) {
  return (
    <div className="counter">
      <button className="counter-btn counter-increment" onClick={onIncrement}>
        <IncrementIcon />
      </button>
      <button className="counter-btn counter-decrement" onClick={onDecrement}>
        <DecrementIcon />
      </button>
    </div>
  );
}
