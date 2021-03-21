import opnenedMenuReducer from "./isMenuOpened";
import { combineReducers } from "redux";

// Reducer: How the action changes the state
const allReducer = combineReducers({
  isOpened: opnenedMenuReducer,
});
export default allReducer;
