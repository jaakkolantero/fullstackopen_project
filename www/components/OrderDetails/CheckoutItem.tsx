import React from "react";
import { CartItem, CartAction } from "../../pages";

interface CheckoutItemProps {
  item: CartItem;
  updateCartItem: (action: CartAction) => void;
}

const CheckoutItem = ({ item, updateCartItem }: CheckoutItemProps) => {
  return (
    <>
      <div className="w-full flex flex-initial justify-between items-center">
        <div className="flex flex-col flex-wrap items-start">
          <div className="text-black text-base">{item.name}</div>
          <div className="text-sm text-gray-600 whitespace-normal">
            {item.ingredients.map(ingredient => ingredient.name).join(" ")}
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-1 items-baseline w-full mr-2 text-black">
            <button
              className="h-6 w-6"
              onClick={() =>
                updateCartItem({
                  type: "update",
                  payload: { ...item, amount: Math.max(item.amount - 1, 1) },
                })
              }
            >
              -
            </button>
            <div className="px-2 py-1 mx-1 rounded border border-gray-300">
              {item.amount}
            </div>
            <button
              className="h-6 w-6"
              onClick={() =>
                updateCartItem({
                  type: "update",
                  payload: { ...item, amount: Math.min(item.amount + 1, 99) },
                })
              }
            >
              +
            </button>
          </div>
          <div className="flex flex-1 ml-4 sm:ml-12 items-baseline">
            <button
              className="h-6 w-6"
              onClick={() =>
                updateCartItem({
                  type: "remove",
                  payload: { id: item.id },
                })
              }
            >
              x
            </button>
          </div>
        </div>
      </div>
      <hr className="border-1" />
    </>
  );
};

export default CheckoutItem;
