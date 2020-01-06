import React, { useState } from "react";
import CartItemWithCounter from "./Cart/CartItemWithCounter";
import { CartItem } from "../pages";

type CartProps = {
  items: Array<CartItem>;
  onAmountChange: (cartItem: CartItem) => void;
};

const Cart = ({ items, onAmountChange }: CartProps) => {
  return (
    <>
      <section className="bg-white flex flex-col items-center w-full px-8 mt-16 pb-6">
        {items.map(item => (
          <CartItemWithCounter
            key={item.id}
            item={item}
            className="mt-3"
            onAmountChange={onAmountChange}
          />
        ))}
      </section>
    </>
  );
};

export default Cart;
