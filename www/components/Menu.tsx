import React from "react";
import MenuItem from "./Menu/MenuItem";
import { MenuItem as _MenuItem } from "./Menu/MenuItem";

type MenuProps = {
  items: Array<_MenuItem>;
  onAddToCart: (menuItem: _MenuItem) => void;
};

const Menu = ({ items, onAddToCart }: MenuProps) => {
  const handleAddToCart = (menuItem: _MenuItem) => onAddToCart(menuItem);
  return (
    <section className="bg-gray-100 flex flex-col items-center w-full mt-16 pb-6">
      <div className="max-w-sm w-full">
        {items.map(item => (
          <React.Fragment key={item.id}>
            <MenuItem item={item} onAddToCart={handleAddToCart} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Menu;
