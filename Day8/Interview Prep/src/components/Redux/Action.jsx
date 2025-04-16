import {
  FETCHDATA_FAILURE,
  FETCHDATA_REQUEST,
  FETCHDATA_SUCCESS,
} from "./ActionType";

import axios from 'axios'

export const fetchuserrequest = () => ({
  type: FETCHDATA_REQUEST,
});

export const fetchusersuccess = (user) => ({
  type: FETCHDATA_SUCCESS,
  payload: user,
});

export const fetchuserfailure = (error) => ({
  type: FETCHDATA_FAILURE,
  payload: error,
});

export const fetchdata = () => {
  return (dispatch) => {
    dispatch(fetchuserrequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch(fetchusersuccess(res.data)))
      .catch((err) => dispatch(fetchuserfailure(err.message)));
  };
};
