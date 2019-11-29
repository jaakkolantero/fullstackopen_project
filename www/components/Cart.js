import React from "react";

const Cart = () => {
  return (
    <>
      <section className="bg-white flex flex-col items-center w-full px-8 mt-16 pb-6">
        <div className="flex flex-row w-full items-center bg-gray-100 rounded shadow py-2 px-3 mt-6">
          <div className="flex flex-col items-start">
            <div className="capitalize text-2xl text-gray-800">margherita</div>
            <div className="italic text-gray-700 text-sm pl-1">
              Shredded mozzarella, fresh basil
            </div>
          </div>
          <div className="flex flex-row items-baseline">
            <div className="text-sm ml-3">x1</div>
            <div className="font-bold text-xl text-gray-800 mt-1 ml-3">
              12,90 €
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
