import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faTrashAlt,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { CardContext } from "./../Reducer/context";
import "../style/style.css";
const ModalList = () => {
  const { order, changeModal, remove, incr, decr } = useContext(CardContext);

  const totalPrice = order.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div id="modal-list">
      <div className="card w-90 m-2">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>Fortnite Cart</th>
              <th>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginRight: "10px",
                    fontSize: "1.3rem",
                  }}
                >
                  <FontAwesomeIcon
                    onClick={changeModal}
                    icon={faClose}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {order.length > 0 ? (
              order.map((item, idx) => {
                return (
                  <>
                    <tr key={idx}>
                      <td>
                        {item.name} x{item.quantity} = $
                        {item.price * item.quantity}
                      </td>
                      <td className="d-flex justify-content-end">
                        <button
                          className=" btn btn-success"
                          style={{ borderRadius: "50%", fontSize: "1rem" }}
                          onClick={() => incr(item.id)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <button
                          className="mx-2 btn btn-danger"
                          style={{ borderRadius: "50%", fontSize: "1rem" }}
                          onClick={() => decr(item.id)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button
                          onClick={() => remove(item.id)}
                          className="btn btn-danger mr-3"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <tr>
                <td className="text-center" colSpan="4">
                  No items, Please add items to cart
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <h6 className={totalPrice > 0 ? "text-center" : "d-none"}>
          Total Price is ${totalPrice}
        </h6>
      </div>
    </div>
  );
};

export default ModalList;
