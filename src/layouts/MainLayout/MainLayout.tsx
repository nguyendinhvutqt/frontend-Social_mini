import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
