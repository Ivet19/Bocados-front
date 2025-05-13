import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
