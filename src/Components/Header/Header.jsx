import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  const [defaultUser, setDefaultUser] = useState("1");

  return (
    <>
      <nav className="flex justify-between items-center shadow-md py-4 px-40">
        <div>
          <Link to="/">
            <p className="text-2xl bg-cyan-800 text-white py-2 px-4 rounded-md">
              your Logo{" "}
            </p>
          </Link>
        </div>
        <div>
          <ul className="flex">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"} px-4`
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"} px-4`
                }
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"} px-4`
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"} px-4`
                }
                to={"/mygithub"}
              >
                Github
              </NavLink>
            </li>
            <li className="user-dropdown relative px-4">
              User
              <ul className="text-gray-600 hidden user-dropdown-menu absolute w-20 shadow-md z-10 bg-white">
                <li className=" py-2 px-4">
                  <Link to={"/user/1"}>User 1</Link>
                </li>
                <li className=" py-2 px-4">
                  <Link to={"/user/2"}>User 2</Link>
                </li>
                <li className=" py-2 px-4">
                  <Link to={"/user/3"}>User 3</Link>
                </li>
                <li className=" py-2 px-4">
                  <Link to={"/user/4"}>User 4</Link>
                </li>
                <li className=" py-2 px-4">
                  <Link to={"/user/5"}>User 5</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex">
            <li>
              <Link
                to={"/login"}
                className="bg-red-500 hover:bg-red-600 py-2 px-4 text-white rounded-md mr-2"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to={"/signup"}
                className="bg-green-500 hover:bg-green-600 py-2 px-4 text-white rounded-md"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
