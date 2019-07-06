import React from "react";

export function Popover({ children, control, direction, open }) {
  return (
    <div className="popover-wrapper">
      {control}
      {open && (
        <div className="popover-container">
          <div className={`popover ${direction === "left" ? "left" : "right"}`}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
