import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";
import Modal from "../Modal/Modal";
import "./Layout.css";
import useModal from "../../hooks/hooks/useModal";

const Layout: React.FC = () => {
  const { modalState, hideModal } = useModal();

  return (
    <div className="container">
      <Header />
      <Navigation />
      <main className="main-container">
        <Outlet />
        {modalState.isOpen && (
          <Modal
            isSuccess={modalState.isSuccess}
            text={modalState.modalText}
            action={hideModal}
          />
        )}
      </main>
    </div>
  );
};

export default Layout;
