import React from "react";
import { CartItem } from "../../pages";

const CheckoutItem = ({ ingredients, name, price, amount }: CartItem) => {
  return (
    <>
      <div className="w-full flex flex-no-wrap justify-between items-baseline">
        <div className="flex flex-col items-start flex-shrink-0">
          <div className="text-black text-base">{name}</div>
          <div className="text-sm text-gray-600">{ingredients.join(" ")}</div>
        </div>
        <div className="flex items-baseline justify-end w-full mr-2 text-black">
          <button className="h-6 w-6">-</button>
          <div className="px-2 py-1 mx-1 rounded border border-gray-300">
            {amount}
          </div>
          <button className="h-6 w-6">+</button>
        </div>
        <div className="flex ml-4 sm:ml-12 items-baseline">
          <button className="h-6 w-6">x</button>
        </div>
      </div>
      <hr className="border-1" />
    </>
  );
};

export default CheckoutItem;
