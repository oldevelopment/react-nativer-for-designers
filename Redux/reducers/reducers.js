import opnenedMenuReducer from "./isMenuOpened";
import { combineReducers } from "redux";
import gestureReducer from "./gestureReducer";

// Reducer: How the action changes the state
const allReducer = combineReducers({
  isOpened: opnenedMenuReducer,
  isGestureEnabled: gestureReducer,
});
export default allReducer;
