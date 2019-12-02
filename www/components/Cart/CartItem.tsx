import React from "react";

const CartItem = () => {
  return (
    <div className="select-none flex flex-row w-full items-center bg-gray-100 overflow-hidden rounded shadow py-2 px-3">
      <div className="flex flex-col items-start">
        <div className="capitalize text-2xl text-gray-800">margherita</div>
        <div className="italic text-gray-700 text-sm pl-1">
          Shredded mozzarella, fresh basil
        </div>
      </div>
      <div className="flex flex-row items-baseline">
        <div className="text-sm ml-3">x1</div>
        <div className="font-bold text-xl text-gray-800 mt-1 ml-3">12,90 €</div>
      </div>
    </div>
  );
};

export default CartItem;
