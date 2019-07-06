import React from "react";

export function NumericDisplay({ title, value }) {
  return (
    <div className="numeric-display">
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
}
