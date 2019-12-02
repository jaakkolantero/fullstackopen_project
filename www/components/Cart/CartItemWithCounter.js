import React from "react";
import CartItem from "./CartItem";
import WithCounter from "./WithCounter";

const CartItemWithCounter = ({ count, onCountChange, className }) => {
  return (
    <div className={className}>
      <WithCounter count={count} onCountChange={onCountChange}>
        <CartItem />
      </WithCounter>
    </div>
  );
};

export default CartItemWithCounter;
