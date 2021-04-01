import { combineReducers } from "redux";
import opnenedMenuReducer from "./isMenuOpened";
import gestureReducer from "./gestureReducer";
import modalReducer from "./modalReucer";

// Reducer: How the action changes the state
const allReducer = combineReducers({
  isOpened: opnenedMenuReducer,
  isGestureEnabled: gestureReducer,
  modalReducer: modalReducer,
});
export default allReducer;
