import React from "react";
import useModal from "../../hooks/useModal";
import Modal from "./Modal";
import CheckoutModal from "./CheckoutModal";
import { CartItem, CartAction } from "../../pages";
import { NextPage } from "next";

interface CheckoutProps {
  cart: CartItem[];
  total: number;
  updateCartItem: (action: CartAction) => void;
}

const Checkout: NextPage<CheckoutProps> = ({
  cart,
  total,
  updateCartItem,
}: CheckoutProps) => {
  const { open: openCheckout, close: closeCheckout } = useModal("checkout");
  const handleOpenCheckout = (): void => {
    if (cart.length) {
      openCheckout();
    }
  };

  return (
    <>
      <button
        onClick={handleOpenCheckout}
        className="self-center bg-gray-600 text-white py-3 px-24 mt-6 rounded hover:bg-gray-500"
      >
        Checkout
      </button>
      <Modal name="checkout">
        <CheckoutModal
          cart={cart}
          close={closeCheckout}
          total={total}
          updateCartItem={updateCartItem}
        />
      </Modal>
    </>
  );
};

export default Checkout;
