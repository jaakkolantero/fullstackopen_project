import React from "react";
import useSWR from "swr";
import { request } from "graphql-request";

import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import OrderDetails from "../components/OrderDetails";

const API = "http://localhost:3000/api/graphql";

const Index = () => {
  const query = `{menuItems{id,name,ingredients,price}}`;
  const { data, error } = useSWR(query, query => request(API, query));

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (data) console.log("data", data);
  return (
    <>
      <Navigation />
      <Heading />
      <Menu items={data.menuItems} />
      <Cart />
      <OrderDetails />
    </>
  );
};

export default Index;
