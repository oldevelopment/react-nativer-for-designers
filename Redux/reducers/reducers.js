import { combineReducers } from "redux";
import opnenedMenuReducer from "./isMenuOpened";
import gestureReducer from "./gestureReducer";
import modalReducer from "./modalReucer";
import nameReducer from "./nameReducer";

// Reducer: How the action changes the state
const allReducer = combineReducers({
  isOpened: opnenedMenuReducer,
  isGestureEnabled: gestureReducer,
  modalReducer: modalReducer,
  nameReducer: nameReducer,
});
export default allReducer;
