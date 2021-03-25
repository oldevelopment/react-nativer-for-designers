const gestureReducer = (state = "enableGesture", action) => {
  switch (action.type) {
    case "disableGesture":
      return "disableGesture";
    case "enableGesture":
      return "enableGesture";
    default:
      return state;
  }
};
export default gestureReducer;
