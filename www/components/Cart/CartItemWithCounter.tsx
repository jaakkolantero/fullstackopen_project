import React from "react";
import CartItem from "./CartItem";
import WithCounter, { WithCounterProps } from "./WithCounter";
import { CartItem as _CartItem } from "../../pages";
export interface CartItemWithCounterProps {
  item: _CartItem;
  className?: string;
  count?: number;
  onAmountChange: (cartItem: _CartItem) => void;
}

const CartItemWithCounter = ({
  item,
  count,
  onAmountChange,
  className,
}: CartItemWithCounterProps) => {
  const handleCountChange = count => {
    onAmountChange({ ...item, amount: count });
  };
  return (
    <div className={className}>
      <WithCounter count={item.amount} onCountChange={handleCountChange}>
        <CartItem item={item} />
      </WithCounter>
    </div>
  );
};

export default CartItemWithCounter;
