import counterReducer from "./counter";
import opnenedMenuReducer from "./isMenuOpened";
import { combineReducers } from "redux";

// Reducer: How the action changes the state
const allReducer = combineReducers({
  counter: counterReducer,
  isOpened: opnenedMenuReducer,
});
export default allReducer;
