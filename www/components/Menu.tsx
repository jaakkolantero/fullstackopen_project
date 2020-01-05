import React from "react";
import MenuItem from "./Menu/MenuItem";

export interface MenuItem {
  id: string;
  name: string;
  ingredients: string[];
  price: number[];
}

type MenuProps = {
  items: Array<MenuItem>;
};

const Menu = ({ items }: MenuProps) => {
  return (
    <section className="bg-gray-100 flex flex-col items-center w-full px-8 mt-16 pb-6">
      <div className="max-w-sm w-full">
        {items.map(item => (
          <React.Fragment key={item.id}>
            <MenuItem item={item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Menu;
