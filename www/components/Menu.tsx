import React from "react";
import MenuItem from "./Menu/MenuItem";

const Menu = () => {
  return (
    <section className="bg-gray-100 flex flex-col items-center w-full px-8 mt-16 pb-6">
      <div className="max-w-sm w-full">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default Menu;
