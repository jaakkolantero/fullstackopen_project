import React from "react";
import { formatPrice } from "../utils";

const OrderDetails = ({ total }) => {
  return (
    <div className="flex flex-col w-full mb-6 text-gray-600 px-8 mt-3">
      <div className="mb-3">
        Estimated delivery{" "}
        <mark className="bg-transparent text-gray-700">30</mark> min
      </div>
      <div className="w-full">
        Total{" "}
        <mark className="bg-transparent text-gray-700 text-xl">
          {formatPrice(total)}
        </mark>{" "}
        €
      </div>
      <button className="self-center bg-gray-600 text-white py-3 px-24 mt-6 rounded hover:bg-gray-500">
        Continue
      </button>
    </div>
  );
};

export default OrderDetails;
