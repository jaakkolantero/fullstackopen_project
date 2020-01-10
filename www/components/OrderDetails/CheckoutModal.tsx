import React, { useEffect } from "react";
import CheckoutItem from "./CheckoutItem";
import { formatPrice } from "../../utils";
import { CartItem, CartAction } from "../../pages";

interface CheckoutModalProps {
  cart: CartItem;
  close: () => void;
  total: string;
  updateCartItem: (cart: CartAction) => void;
}

const CheckoutModal = ({ cart, close, total, updateCartItem }) => {
  useEffect(() => {
    if (cart.length < 1) {
      close();
    }
  }, [cart]);
  return (
    <>
      <div className="flex flex-col justify-center items-center fixed inset-0 z-50 w-full h-full bg-modal">
        <div className="w-full sm:max-w-lg sm:rounded max-h-screen overflow-auto bg-white">
          <div className="py-2 px-4">
            <div className="sticky top-0 w-full flex justify-between mb-3">
              <div className="capitalize font-bold text-black text-lg">
                checkout
              </div>
              <button
                className="text-lg font-bold text-red-600 underline"
                onClick={close}
              >
                Cancel
              </button>
            </div>
            {cart.map(item => (
              <div key={`${item.id}-checkoutModal`}>
                <CheckoutItem item={item} updateCartItem={updateCartItem} />
                <div className="mb-3" />
              </div>
            ))}
            <div className="flex justify-end text-xl font-bold mr-6 mt-6">
              <span className="text-gray-600 mr-3">Subtotal:</span>
              <span className="text-black">{formatPrice(total)}€</span>
            </div>
          </div>
          <div className="flex flex-col w-full bg-gray-900 text-white pt-8 pb-3 px-6 rounded-t">
            <div className="flex justify-between items-top">
              <div className="flex-shrink-0">
                <div>
                  <label
                    className="block tracking-wide text-gray-500 text-xs font-base"
                    htmlFor="checkout-name"
                  >
                    name
                  </label>
                  <input
                    className="placeholder-gray-700 appearance-none block w-full bg-transparent text-gray-100 border-b border-gray-700 focus:border-gray-500 leading-tight focus:outline-none pt-1"
                    id="checkout-name"
                    type="text"
                    placeholder="name"
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block tracking-wide text-gray-500 text-xs font-base"
                    htmlFor="checkout-phone"
                  >
                    phone
                  </label>
                  <input
                    className="placeholder-gray-700 appearance-none block w-full bg-transparent text-gray-100 border-b border-gray-700 focus:border-gray-500 leading-tight focus:outline-none pt-1"
                    id="checkout-phone"
                    type="tel"
                    placeholder="phone"
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block tracking-wide text-gray-500 text-xs font-base"
                    htmlFor="checkout-email"
                  >
                    email
                  </label>
                  <input
                    className="placeholder-gray-700 appearance-none block w-full bg-transparent text-gray-100 border-b border-gray-700 focus:border-gray-500 leading-tight focus:outline-none pt-1"
                    id="checkout-email"
                    type="email"
                    placeholder="email"
                  />
                </div>
              </div>
              <div className="w-full flex justify-center items-center ml-4">
                <img
                  className="w-48 hidden xs:block"
                  src="/images/undraw_eating_together_tjhx.svg"
                  alt="people eating together"
                />
              </div>
            </div>

            <button className="rounded bg-green-700 text-green-300 hover:bg-green-800 py-2 mt-6">
              Order & Pickup
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-modal {
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
};

export default CheckoutModal;
