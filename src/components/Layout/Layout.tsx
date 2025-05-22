import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";
import useModal from "../../hooks/hooks/useModal";
import Modal from "../Modal/Modal";
import "./Layout.css";

const Layout: React.FC = () => {
  const { modalState, hideModal } = useModal();

  return (
    <div className="container">
      <Header />
      <Navigation />
      <main className="main-container">
        <Outlet />
      </main>
      {modalState.isOpen && (
        <Modal
          isSuccess={modalState.isSuccess}
          text={modalState.modalText}
          action={hideModal}
        />
      )}
    </div>
  );
};

export default Layout;
