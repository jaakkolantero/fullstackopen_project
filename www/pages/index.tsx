import React from "react";
import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import OrderDetails from "../components/OrderDetails";

const Index = () => {
  return (
    <>
      <Navigation />
      <Heading />
      <Menu />
      <Cart />
      <OrderDetails />
    </>
  );
};

export default Index;
