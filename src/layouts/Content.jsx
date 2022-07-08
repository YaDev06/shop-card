import React, { useContext, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import DataList from "./../components/DataList";
import Cart from "./../components/Cart";
import ModalList from "./../components/ModalList";
import { CardContext } from './../Reducer/context';

const Content = () => {

  const { setData,modal } = useContext(CardContext);

  const fetchData = async () => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.featured);
      })
  };

  useEffect(() => {
    fetchData();
  }, []);




  return (
    <>
      <div className="content">
        {modal && <ModalList />}
        <Cart />
        <DataList />
      </div>
    </>
  );
};

export default Content;
