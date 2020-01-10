import React, { useState, useEffect } from "react";
import { formatPrice } from "../utils";
import useModal from "../hooks/useModal";
import Modal from "./OrderDetails/Modal";
import { CartItem } from "../pages";
import Checkout from "./OrderDetails/Checkout";

interface OrderDetailsProps {
  cart: CartItem[];
}

const OrderDetails = ({ cart }: OrderDetailsProps) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price[0] * item.amount;
    }
    setTotal(totalPrice);
  }, [cart]);

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
      <Checkout cart={cart} total={total} />
    </div>
  );
};

export default OrderDetails;
