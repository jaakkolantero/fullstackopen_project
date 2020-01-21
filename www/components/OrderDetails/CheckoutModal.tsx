import React, { useEffect, useState } from "react";
import CheckoutItem from "./CheckoutItem";
import { formatPrice } from "../../utils";
import { CartItem, CartAction } from "../../pages";

interface CheckoutModalProps {
  cart: CartItem[];
  close: () => void;
  total: string;
  updateCartItem: (cart: CartAction) => void;
}

const CheckoutModal = ({
  cart,
  close,
  total,
  updateCartItem,
}: CheckoutModalProps) => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "New Order",
    honeypot: "", // if any value received in this field, form submission will be ignored.
    message: "",
    total: "",
    replyTo: "@", // this will set replyTo of email to email address entered in the form
    //access key to pizzaitalia@maildrop.cc
    accessKey: "bf95e5ba-5e28-4830-b4bb-50a4ef28114e", // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("contact", contact);
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Thank you for your order!",
        });
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };

  const updateMessage = () => {
    const cartForEmail = cart.map(
      item =>
        `<br />Name: <b>${
          item.name
        }</b><br />Ingredients: ${item.ingredients
          .map(ingredient => ingredient.name)
          .join(" ")}<br />Amount: <b>${item.amount}</b><hr />`
    );
    const appendtotalForEmail = [...cartForEmail, `Total: <b>${total}€</b>`];
    const emailMessage = appendtotalForEmail.join("");
    setContact({ ...contact, message: emailMessage, total: total });
  };

  useEffect(() => {
    if (cart.length < 1) {
      close();
    }
    updateMessage();
  }, [cart]);

  return (
    <>
      <div className="flex flex-col justify-center items-center fixed inset-0 z-50 w-full h-full bg-modal mx-4">
        {response?.message ? (
          <div className="w-full sm:max-w-lg sm:rounded max-h-screen overflow-auto bg-white">
            <div className="py-2 px-4">
              <div className="sticky top-0 w-full flex justify-between mb-3">
                <div className="capitalize font-bold text-black text-lg">
                  {response.type}
                </div>
                <button
                  className="text-lg font-bold text-red-600 underline"
                  onClick={close}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center items-center my-3">
              {response.message}
            </div>
          </div>
        ) : (
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
                  Close
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
                <span className="text-black">
                  {formatPrice(parseInt(total))}€
                </span>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full bg-gray-900 text-white pt-8 pb-3 rounded-t"
            >
              <div className="flex justify-between items-top px-6">
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
                      name="name"
                      type="text"
                      placeholder="name"
                      onChange={handleChange}
                      required
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
                      name="phone"
                      type="tel"
                      onChange={handleChange}
                      placeholder="phone"
                      required
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
                      name="email"
                      type="email"
                      onChange={handleChange}
                      placeholder="email"
                      required
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

              <button
                type="submit"
                className="rounded bg-green-700 text-green-300 hover:bg-green-800 py-2 mt-6 mx-8"
              >
                Order & Pickup
              </button>
            </form>
          </div>
        )}
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
