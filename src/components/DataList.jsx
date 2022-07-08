import React, { useContext } from "react";
import DataItem from "./DataItem";
import Loader from "./Loader/Loader";
import { CardContext } from './../Reducer/context';
const DataList = (props) => {
  const { data } = useContext(CardContext);
  if (!data) {
    return <h1>Error</h1>;
  } else {
    return (
      <>
        {!data.length ? <Loader /> : data.map((item) => <DataItem  key={item.id } {...item} />)}
      </>
    );
  }
};

export default DataList;
