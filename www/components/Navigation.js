import React from "react";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-2 px-4">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Pizza italia
        </span>
      </div>
      <div className="block">
        <button className="flex items-center px-3 py-2 text-black hover:text-gray-700">
          <svg
            className="fill-current text-black hover:text-gray-700 h-6 w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
