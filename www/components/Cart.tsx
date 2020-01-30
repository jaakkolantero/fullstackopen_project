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
      <section className="bg-white flex w-full mt-16 pb-6">
        <div className="flex flex-col items-center w-full mb-6 text-gray-600 mt-3">
          <div className="w-full flex flex-col max-w-lg">
            <h2 className="text-xl font-bold text-black">Cart</h2>
            {items.map(item => (
              <CartItemWithCounter
                key={item.id}
                item={item}
                className="mt-3"
                onAmountChange={onAmountChange}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
