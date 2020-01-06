import React from "react";
import { formatPrice } from "../../utils";

export interface MenuItem {
  id: string;
  name: string;
  ingredients: string[];
  price: number[];
}

type MenuItemProps = {
  item: MenuItem;
  onAddToCart: (menuItem: MenuItem) => void;
};

const _MenuItem = ({ item, onAddToCart }: MenuItemProps) => {
  const normalPrice = formatPrice(item?.price?.[0]);
  return (
    <div className="flex flex-col w-full items-start bg-white rounded shadow py-2 px-3 mt-6">
      <div className="capitalize text-2xl text-gray-800">{item?.name}</div>
      <div className="italic text-gray-700 text-sm pl-1">
        {item?.ingredients?.join(" ")}
      </div>
      <div className="font-bold text-xl text-gray-800 mt-1">{normalPrice}€</div>
      <button
        onClick={() => onAddToCart(item)}
        className="self-center bg-gray-600 tracking-tight text-white py-1 px-20 mt-2 rounded hover:bg-gray-500"
      >
        Add to cart
      </button>
    </div>
  );
};

export default _MenuItem;
