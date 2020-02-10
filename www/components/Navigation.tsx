import React, { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(prev => !prev);
  return (
    <>
      <nav className={`w-full bg-white py-2 px-4 ${!menu ? "shadow" : ""}`}>
        <div className="w-full md:max-w-4xl mx-auto">
          <div className="flex flex-no-wrap items-center justify-between">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
              <span className="font-semibold text-2xl tracking-tight">
                Pizza italia
              </span>
            </div>
            <div className="block">
              <button
                onClick={toggleMenu}
                className="flex items-center px-3 py-2 text-black hover:text-gray-700"
              >
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
          </div>
        </div>
      </nav>
      {menu ? (
        <div className="w-full py-2 px-4 sm:px-8 shadow text-xl font-bold">
          <ul>
            <li className="mb-3">
              <Link href="/">
                <a
                  className="hover:text-gray-700"
                  onClick={() => setMenu(false)}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className="hover:text-gray-700"
                  onClick={() => setMenu(false)}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/auth"}>
                <a
                  className="hover:text-gray-700"
                  onClick={() => setMenu(false)}
                >
                  Sign in
                </a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
