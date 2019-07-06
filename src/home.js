import React, { useState } from "react";
import { Cart } from "./cart";
import { Toolbar } from "./components/toolbar";
import { CartIcon } from "./components/cart-icon";
import { IconButton } from "./components/icon-button";
import { Popover } from "./components/popover";

export function Home() {
  // Use state is a react hook that allows you to hold a value between renders
  // and manipulate it
  const [showCart, setShowCart] = useState(true);
  const [showTest, setShowTest] = useState(false);
  return (
    <Toolbar>
      <h1>Title of site</h1>
      <Popover
        direction="left"
        open={showCart}
        control={
          <IconButton onClick={() => setShowCart(!showCart)}>
            <CartIcon />
          </IconButton>
        }
      >
        <Cart />
      </Popover>
    </Toolbar>
  );
}
