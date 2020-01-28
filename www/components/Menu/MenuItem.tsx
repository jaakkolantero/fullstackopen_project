import React from "react";

export interface Ingredient {
  id: string;
  name: string;
}
export interface MenuItem {
  id: string;
  name: string;
  ingredients: Ingredient[];
  price: string;
}

type MenuItemProps = {
  item: MenuItem;
  onAddToCart: (menuItem: MenuItem) => void;
};

const _MenuItem = ({ item, onAddToCart }: MenuItemProps) => {
  return (
    <div
      key={item.id}
      className="flex flex-col w-full max-w-xs items-start py-2 px-3"
    >
      <div className="capitalize text-2xl text-gray-800">{item?.name}</div>
      <div className="italic text-gray-700 text-sm pl-1">
        {item?.ingredients?.map(ingredient => ingredient.name).join(" ")}
      </div>
      <div className="font-bold text-xl text-gray-800 mt-1">{item?.price}€</div>
      <button
        onClick={() => onAddToCart(item)}
        className="self-center bg-gray-600 tracking-tight text-white py-1 px-20 mt-2 rounded hover:bg-gray-500"
      >
        Add to cart
      </button>
      <hr className="mt-2 w-full border-gray-200 border" />
    </div>
  );
};

export default _MenuItem;
