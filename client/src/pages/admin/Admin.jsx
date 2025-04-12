import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/admin/Navbar";
import SideBar from "../../components/admin/SideBar";
import Footer from "../../components/admin/Footer";

const Admin = () => {
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar />

      <div className="flex">
        <SideBar />
        <div className="flex-1"> {<Outlet />}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
