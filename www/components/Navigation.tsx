import React, { useState } from "react";
import Link from "next/link";
import logout from "../utils/auth/logout";
import Router from "next/router";

const Navigation = ({ user }) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(prev => !prev);
  const Logout = () => (
    <>
      <a
        className="hover:cursor-pointer hover:text-gray-100 hover:bg-gray-700 py-2 px-4 bg-gray-200 rounded"
        onClick={async () => {
          try {
            await logout();
            Router.push("/");
          } catch (e) {
            console.error(e);
          }
        }}
      >
        Log out
      </a>
      <span className="ml-3 text-xs align-middle">{user?.email}</span>
    </>
  );
  const SignIn = () =>
    user ? (
      <Logout />
    ) : (
      <Link href={"/auth"}>
        <a
          className="hover:cursor-pointer hover:text-gray-100 hover:bg-gray-700 py-2 px-4 bg-gray-200 rounded"
          onClick={() => setMenu(false)}
        >
          Log in
        </a>
      </Link>
    );
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
            <div className="block flex items-center">
              {user ? (
                <div className="text-xs text-gray-700">
                  <b>hi, </b>
                  {user?.email}
                </div>
              ) : null}

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
                  className="hover:text-gray-700 px-4"
                  onClick={() => setMenu(false)}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/about">
                <a
                  className="hover:text-gray-700 px-4"
                  onClick={() => setMenu(false)}
                >
                  About
                </a>
              </Link>
            </li>
            {user ? (
              <li className="mb-3">
                <Link href="/user">
                  <a
                    className="hover:text-gray-700 px-4"
                    onClick={() => setMenu(false)}
                  >
                    Account
                  </a>
                </Link>
              </li>
            ) : null}
            <li className="">
              <SignIn />
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
