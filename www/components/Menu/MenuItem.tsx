import React from "react";
import { MenuItem as _MenuItem } from "../Menu";

type MenuItemProps = {
  item: _MenuItem;
};

const formatPrice = (num: number) =>
  num
    ? num
        .toFixed(2)
        .replace(/\.00$/, "")
        .concat("€")
    : null;

const MenuItem = ({ item }: MenuItemProps) => {
  const normalPrice = formatPrice(item?.price?.[0]);
  return (
    <div className="flex flex-col w-full items-start bg-white rounded shadow py-2 px-3 mt-6">
      <div className="capitalize text-2xl text-gray-800">{item?.name}</div>
      <div className="italic text-gray-700 text-sm pl-1">
        {item?.ingredients?.join(" ")}
      </div>
      <div className="font-bold text-xl text-gray-800 mt-1">{normalPrice}</div>
      <button className="self-center bg-gray-600 tracking-tight text-white py-1 px-20 mt-2 rounded hover:bg-gray-500">
        Add to cart
      </button>
    </div>
  );
};

export default MenuItem;
