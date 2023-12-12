import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";
import chargeReducer from "./chargeReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  isData: isDataReducer,
  charge: chargeReducer,
});

export default rootReducer;
