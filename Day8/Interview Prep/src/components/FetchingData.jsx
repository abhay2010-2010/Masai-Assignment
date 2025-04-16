import React, { useEffect } from "react";
import { fetchdata } from "./Redux/Action";
import {useDispatch,useSelector} from "react-redux";

function FetchingData() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.user);
  useEffect(()=>{
    dispatch(fetchdata())
  },[dispatch])
  return (
    <div>
      {loading && <h1>Loadiing...</h1>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {data.map((data) => {
        return (
          <div key={data.id}>
            <p>{data.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FetchingData;
