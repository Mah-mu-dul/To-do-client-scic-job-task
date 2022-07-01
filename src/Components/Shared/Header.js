import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const handleSignout = () => {
    // localStorage.removeItem("accessToken");
    signOut(auth);
  };
  const [user] = useAuthState(auth);
  console.log(user);

  const navitems = (
    <>
      <li>
        <Link to="/">Home </Link>
      </li>

      <li>
        <Link to="/to-do">To-Do </Link>
      </li>

      <li tabIndex="0">
        <Link to="/complete">Complete</Link>
      </li>

      <li>
        <Link to="/calendar">calendar</Link>
      </li>

      {user ? (
        <li>
          <button onClick={handleSignout} className="  box-none text-black">
            <h4>Log out</h4>
          </button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      {user ? (
        <>
          <li>
            <button className="  box-none text-black">
              <Link to="">{user.displayName}</Link>
            </button>
          </li>
          <li>
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img alt={user?.displayName[0]} src={user?.displayName} />
              </div>
            </div>
          </li>
        </>
      ) : (
        <li></li>
      )}
    </>
  );

  return (
    <div className=" ">
      <div className="navbar bg-pink-100 pr-20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              {navitems}
            </ul>
          </div>
          <Link to="/">
            <h1 className="text-5xl">Todo</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navitems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
