import React from "react";
import { Link } from "react-router-dom";

const navitems = [
  <li>
    <Link to="/">Home </Link>
  </li>,
  <li>
    <Link to="/to-do">To-Do </Link>
  </li>,
  <li tabindex="0">
    <Link to="/complete">Complete</Link>
  </li>,
  <li>
    <Link to="/calendar">calendar</Link>
  </li>,
];
const Header = () => {
  return (
    <div className=" ">
      <div class="navbar bg-pink-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              {navitems.map((navitem) => (
                <li>{navitem}</li>
              ))}
            </ul>
          </div>
          <Link to='/'>
            <h1 className="text-5xl">Todo</h1>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            {navitems.map((navitem) => (
              <li>{navitem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
