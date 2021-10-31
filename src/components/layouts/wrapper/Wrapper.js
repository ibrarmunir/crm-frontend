import Footer from "components/layouts/footer/Footer";
import Header from "components/layouts/header/Header";
import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <header className="header">
        <Header />
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Wrapper;
