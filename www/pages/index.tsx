import React, { useReducer, useEffect, useState } from "react";
import useSWR from "swr";
import { request } from "graphql-request";
import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import OrderDetails from "../components/OrderDetails";
import { MenuItem } from "../components/Menu/MenuItem";

const API = process.env.GRAPHQL_API;

const initialCart = [];

export interface CartItem extends MenuItem {
  amount: number;
}
interface CartState extends Array<CartItem> {}

type CartAction =
  | { type: "add"; payload: MenuItem }
  | { type: "remove"; payload: { id: string } }
  | { type: "update"; payload: CartItem };

type Query = {
  menuItems: Array<MenuItem>;
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "add":
      return [...state, { ...action.payload, amount: 1 }];
    case "remove":
      return state.filter(({ id }) => id !== action.payload.id);
    case "update":
      return state.map(item => {
        return item.id !== action.payload.id
          ? item
          : { ...item, ...action.payload };
      });
    default:
      break;
  }
};

const Index = () => {
  const query = `{menuItems{id,name,ingredients,price}}`;
  const { data, error } = useSWR<Query>(query, query => request(API, query));
  const [cart, dispatchCart] = useReducer(cartReducer, initialCart);

  const handleAddToCart = (menuItem: MenuItem) => {
    const itemInCart = cart.find(({ id }) => id === menuItem.id);
    if (itemInCart) {
      dispatchCart({
        type: "update",
        payload: { ...itemInCart, amount: itemInCart.amount + 1 },
      });
    } else {
      dispatchCart({ type: "add", payload: menuItem });
    }
  };

  const handleAmountChange = (cartItem: CartItem) => {
    dispatchCart({
      type: "update",
      payload: cartItem,
    });
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <Navigation />
      <Heading />
      <Menu items={data.menuItems} onAddToCart={handleAddToCart} />
      <Cart items={cart} onAmountChange={handleAmountChange} />
      <OrderDetails cart={cart} />
    </>
  );
};

export default Index;
