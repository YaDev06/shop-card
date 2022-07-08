/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { CardContext } from "./../Reducer/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DataItem = ({
  id,
  full_background,
  categories,
  name,
  description,
  price,
  type,
  releaseDate,
}) => {
  const notify = () => toast("An Item Added To Cart Successfully");
  const { getItem } = useContext(CardContext);
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="card my-3" key={id} style={{ width: "18rem" }}>
        <img src={full_background} className="card-img-top" alt={categories} />
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <p
            style={{ fontWight: "200", fontSize: "18px" }}
            className="card-text text-primary"
          >
            {description}
          </p>
          <span className="span ">
            <p>
              {type
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </p>
            <span className="text-muted">Made on {releaseDate}</span>
          </span>
          <div className="card-footer mb-0 mt-3 d-flex justify-content-between">
            <button
              style={{
                backgroundColor: "rgb(64, 184, 0) ",
                color: "white",
                padding: "10px 25px",
                border: "none",
                borderRadius: "50px",
              }}
              onClick={() => {
                notify();
                getItem({id, name, price});
              }}
            >
              Buy Now
            </button>
            <p
              style={{ fontWeight: "200", fontSize: "20px", marginTop: "9px" }}
            >
              ${price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataItem;
