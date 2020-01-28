import React, { useState, useEffect } from "react";
import { formatPrice } from "../utils";
import { CartItem, CartAction } from "../pages";
import Checkout from "./OrderDetails/Checkout";

interface OrderDetailsProps {
  cart: CartItem[];
  updateCartItem: (action: CartAction) => void;
}

const OrderDetails = ({ cart, updateCartItem }: OrderDetailsProps) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += parseInt(item.price, 10) * item.amount;
    }
    setTotal(totalPrice);
  }, [cart]);

  return (
    <div className="flex flex-col items-center w-full mb-6 text-gray-600 mt-3">
      <div className="w-full flex flex-col max-w-lg">
        <div className="w-full mb-3">
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
      </div>
      <Checkout cart={cart} total={total} updateCartItem={updateCartItem} />
    </div>
  );
};

export default OrderDetails;
