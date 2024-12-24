import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="sticky top-0 shadow-[0_2px_10px_rgba(0,0,0,0.2)] bg-white z-[999]">
        <Header />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
