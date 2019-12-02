import React, { useState } from "react";
import CartItemWithCounter from "./Cart/CartItemWithCounter";

const Cart = () => {
  return (
    <>
      <section className="bg-white flex flex-col items-center w-full px-8 mt-16 pb-6">
        <CartItemWithCounter />
        <CartItemWithCounter className="mt-3" />
        <CartItemWithCounter className="mt-3" />
        <CartItemWithCounter className="mt-3" />
        <CartItemWithCounter className="mt-3" />
      </section>
    </>
  );
};

export default Cart;
