import React from "react";
import WithCounter from "../components/Cart/WithCounter";
import CartItem from "../components/Cart/CartItem";

const Playground = () => {
  const [count, setCount] = React.useState(undefined);
  return (
    <>
      <div className="flex items-center justify-center m-0 p-0 h-screen w-screen">
        <button onClick={() => setCount(-1)}>set to -1</button>
        <button onClick={() => setCount(100)}>set to 100</button>
        <WithCounter
          count={count}
          onCountChange={count => console.log("count", count)}
        >
          <CartItem />
        </WithCounter>
      </div>
    </>
  );
};

export default Playground;
