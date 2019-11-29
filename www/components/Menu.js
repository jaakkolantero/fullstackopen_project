import React from "react";

const Menu = () => {
  return (
    <section className="bg-gray-100 flex flex-col items-center w-full px-8 mt-16 pb-6">
      <div className="flex flex-col w-full items-start bg-white rounded shadow py-2 px-3 mt-6">
        <div className="capitalize text-2xl text-gray-800">margherita</div>
        <div className="italic text-gray-700 text-sm pl-1">
          Shredded mozzarella, fresh basil
        </div>
        <div className="font-bold text-xl text-gray-800 mt-1">12,90 €</div>
        <button className="self-center bg-gray-600 tracking-tight text-white py-1 px-20 mt-2 rounded hover:bg-gray-500">
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default Menu;
