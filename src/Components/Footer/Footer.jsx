import React from "react";
import { NavLink, Link } from "react-router-dom";
import { logo } from "..";
function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white px-40 py-4 flex justify-between">
        <div className="">
          <Link to={"/"}>
            <p className="text-2xl bg-cyan-800 text-white py-2 px-4 rounded-md">
              your Logo{" "}
            </p>
          </Link>
        </div>
        <div className="flex">
          <ul className="pl-20">
            <p className="text-xl mb-2">Resources</p>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/mygithub"}
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"}`
                }
              >
                Github
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/faqs"}
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"}`
                }
              >
                FAQs
              </NavLink>
            </li>
          </ul>
          <ul className="pl-20">
            <p className="text-xl mb-2">Legal</p>
            <li>
              <Link to="#" className="text-gray-500 hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:underline">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
          <ul className="pl-20">
            <p className="text-xl mb-2">Social Media</p>
            <li>
              <Link to="#" className="text-gray-500 hover:underline">
                <i className="fa-brands fa-facebook-f"></i> &nbsp;
                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:underline">
                <i className="fa-brands fa-x-twitter"></i> &nbsp;
                <span>X-twitter</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:underline">
                <i className="fa-brands fa-instagram"></i> &nbsp;
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:underline">
                <i className="fa-brands fa-linkedin-in"></i> &nbsp;
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-500 hover:underline">
                <i className="fa-brands fa-github"></i> &nbsp;
                <span>Github</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>

      <div className="text-center bg-slate-900 text-white py-2">
        © 2024 &nbsp;
        <a
          href="https://github.com/anand-jaiswal-IN?tab=repositories"
          className="hover:underline"
        >
          anandjaiswal
        </a>
        &nbsp; All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;
