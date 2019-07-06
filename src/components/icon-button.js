import React from "react";

export function IconButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="icon-button">
      {children}
    </button>
  );
}
