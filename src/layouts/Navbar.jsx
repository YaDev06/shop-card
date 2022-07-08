import React from "react";
import "../style/style.css";
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light alert alert-primary ">
      <div className="container">
        <a className="navbar-brand" href="/">
          Fortnite Shop
        </a>
        <div className="wrapper">
          <a href="https://t.me/YaDev_06" className="text-decoration-none">
            Telegram
          </a>{" "}|{" "}
          <a href="https://mail.google.com/mail/u/yahyoxonmuhammadaliyev567@gmail.com" className="text-decoration-none">
            Email
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
