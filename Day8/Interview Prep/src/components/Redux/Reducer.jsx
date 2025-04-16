import {
  FETCHDATA_FAILURE,
  FETCHDATA_REQUEST,
  FETCHDATA_SUCCESS,
} from "./ActionType";

const initialstate = {
  loading: false,
  data: [],
  error: "",
};

const useReducerx = (state = initialstate, action) => {
    switch (action.type) {
      case FETCHDATA_REQUEST:
        return { ...state, loading: true };
      case FETCHDATA_SUCCESS:
        return { ...state, loading: false, data: action.payload, error: "" };
      case FETCHDATA_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
export default useReducerx;
