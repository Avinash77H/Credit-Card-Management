import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div className="flex">
      <Sidebar  />
      <Outlet />
    </div>
  );
};

export default Container;
