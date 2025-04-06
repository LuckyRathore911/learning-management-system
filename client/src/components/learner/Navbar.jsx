import React from "react";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

import { assets } from "../../assets/assets";

const Navbar = () => {
  const isCoursesListPage = location.pathname.includes("/courses");
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCoursesListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      <img
        src={assets.logo}
        alt="logo"
        className="w-36 lg:w-48 cursor-pointer"
      />
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button>Become Admin</button> |
              <Link to="/enrollments">My Enrollments</Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => {
              openSignIn();
            }}
            className="bg-blue-600 text-white px-5 rounded-full cursor-pointer"
          >
            Create Account
          </button>
        )}
      </div>

      {/* For phone screens */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button>Become Admin</button> |
              <Link to="/enrollments">My Enrollments</Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => {
              openSignIn();
            }}
            className="cursor-pointer"
          >
            <img src={assets.user_icon}></img>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
