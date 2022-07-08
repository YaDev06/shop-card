import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2 text-center mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>
              Copyright &copy;
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
