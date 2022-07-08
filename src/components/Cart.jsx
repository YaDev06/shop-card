import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CardContext } from "../Reducer/context";

const Cart = () => {

  const { order,changeModal } = useContext(CardContext);

  return (
    <div
      className="alert alert-primary"
      style={{
        width: "3rem",
        height: "3rem",
        position: "fixed",
        top: "7rem",
        right: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        zIndex: "999999",
      }}
      onClick={changeModal}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
      <span style={{ margin: "7px", fontSize: ".7rem" }}>
        {order.length}
        </span>
    </div>
  );
};

export default Cart;
