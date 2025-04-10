import CountReducer from "./Reducer";
import{ legacy_createStore} from "redux"

const store=legacy_createStore(CountReducer);

export default store;