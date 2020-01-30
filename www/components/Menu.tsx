import React, { useState, useEffect } from "react";
import MenuItem from "./Menu/MenuItem";
import { MenuItem as _MenuItem } from "./Menu/MenuItem";
import useMeasure from "react-use-measure";

function chunkArray(arr, chunkCount) {
  const chunks = [];
  while (arr.length) {
    const chunkSize = Math.ceil(arr.length / chunkCount--);
    const chunk = arr.slice(0, chunkSize);
    chunks.push(chunk);
    arr = arr.slice(chunkSize);
  }
  return chunks;
}

type MenuProps = {
  items: Array<_MenuItem>;
  title: string;
  onAddToCart: (menuItem: _MenuItem) => void;
};

const Menu = ({ items, title, onAddToCart }: MenuProps) => {
  const [cols, setCols] = useState([]);
  const [menuReference, menuBounds] = useMeasure();

  useEffect(() => {
    let columns = 1;
    if (menuBounds.width > 640) {
      columns = 2;
    }
    if (menuBounds.width > 1024) {
      columns = 3;
    }
    setCols(chunkArray(items, columns));
  }, [menuBounds]);

  const handleAddToCart = (menuItem: _MenuItem) => onAddToCart(menuItem);
  return (
    <section className="bg-gray-100 flex flex-col items-center w-full mt-16 pl-4 pb-6 ">
      <div ref={menuReference} className="w-full">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex justify-center flex-no-wrap">
            {cols?.map((col, i) => (
              <div
                key={`col-${i}`}
                className={`flex-1 ${
                  i !== cols.length - 1 ? "border-r-2" : ""
                }`}
              >
                {col.map(item => (
                  <React.Fragment key={item.id}>
                    <MenuItem item={item} onAddToCart={handleAddToCart} />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
