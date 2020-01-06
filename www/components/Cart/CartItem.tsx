import React from "react";
import { CartItem as _CartItem } from "../../pages";
import { formatPrice } from "../../utils";

interface CartItemProps {
  item: _CartItem;
}

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="select-none flex flex-row w-full items-center bg-gray-100 overflow-hidden rounded shadow py-2 px-3">
      <div className="flex flex-col items-start">
        <div className="capitalize text-2xl text-gray-800">{item.name}</div>
        <div className="italic text-gray-700 text-sm pl-1">
          {item.ingredients.join(" ")}
        </div>
      </div>
      <div className="flex flex-row items-baseline">
        <div className="text-sm ml-3">x{item.amount}</div>
        <div className="font-bold text-xl text-gray-800 mt-1 ml-3">
          {formatPrice(item.price[0])}€
        </div>
      </div>
    </div>
  );
};

export default CartItem;
