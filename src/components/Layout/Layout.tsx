import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
