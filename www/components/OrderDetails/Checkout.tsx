import React, { useEffect } from "react";
import useModal from "../../hooks/useModal";
import Modal from "./Modal";
import CheckoutModal from "./CheckoutModal";

const Checkout = ({ cart, total }) => {
  const { open: openCheckout, close: closeCheckout } = useModal("checkout");

  return (
    <>
      <button
        onClick={openCheckout}
        className="self-center bg-gray-600 text-white py-3 px-24 mt-6 rounded hover:bg-gray-500"
      >
        Checkout
      </button>
      <Modal name="checkout">
        <CheckoutModal cart={cart} close={closeCheckout} total={total} />
      </Modal>
    </>
  );
};

export default Checkout;
