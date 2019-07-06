import React, { useContext } from "react";
import { CartItemList } from "./components/cart-item-list";
import { CartContext } from "./cart-context";

export function Cart() {
  const { cart, changeItemQuantity } = useContext(CartContext);

  const total = cart.reduce((a, b) => {
    return a + b.value * b.quantity;
  }, 0);

  const tax = total * 1.2;

  const usdExchange = 1.4;

  const usd = tax * usdExchange;

  return (
    <>
      <CartItemList items={cart} changeItemQuantity={changeItemQuantity} />
      <p>Total: £{total.toFixed(2)}</p>
      <p>Total + Tax: £{tax.toFixed(2)}</p>
      <p>Total in USD: ${usd.toFixed(2)}</p>
    </>
  );
}
