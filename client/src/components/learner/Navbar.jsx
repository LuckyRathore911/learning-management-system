import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import axios from "axios";

import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { navigate, isAdmin, backendUrl, setIsAdmin, getToken } =
    useContext(AppContext);

  const isCoursesListPage = location.pathname.includes("/courses");
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeAdmin = async () => {
    try {
      if (isAdmin) {
        navigate("/admin");
        return;
      }

      const token = await getToken();
      const { data } = await axios.get(backendUrl + "/api/admin/update-role", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setIsAdmin(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCoursesListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-32 md:w-36 lg:w-40 cursor-pointer"
      />
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button onClick={becomeAdmin} className="cursor-pointer">
                {isAdmin ? "Admin Dashboard" : "Become Admin"}
              </button>
              |<Link to="/enrollments">My Enrollments</Link>
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
            className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer"
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
              <button onClick={becomeAdmin} className="cursor-pointer">
                {isAdmin ? "Admin Dashboard" : "Become Admin"}
              </button>
              |<Link to="/enrollments">My Enrollments</Link>
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
