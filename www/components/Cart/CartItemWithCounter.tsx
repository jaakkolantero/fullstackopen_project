import React from "react";
import CartItem from "./CartItem";
import WithCounter, { WithCounterProps } from "./WithCounter";

export interface CartItemWithCounterProps {
  className?: string;
  count?: number;
  onCountChange?: (count: number) => void;
}

const CartItemWithCounter = ({
  count,
  onCountChange,
  className,
}: CartItemWithCounterProps) => {
  return (
    <div className={className}>
      <WithCounter count={count} onCountChange={onCountChange}>
        <CartItem />
      </WithCounter>
    </div>
  );
};

export default CartItemWithCounter;
