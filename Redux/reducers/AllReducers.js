const initalState = {
  action: "",
  name: "",
};
const AllReducers = (state = initalState, action) => {
  switch (action.type) {
    case "disableGesture":
      return { ...state, action: "disableGesture" };
    case "enableGesture":
      return { ...state, action: "enableGesture" };
    case "openMenu":
      return { ...state, action: "openMenu" };
    case "closeMenu":
      return { ...state, action: "closeMenu" };
    case "openModal":
      return { ...state, action: "openModal" };
    case "closeModal":
      return { ...state, action: "closeModal" };
    case "updateName":
      return { ...state, name: action.name };
    default:
      return state;
  }
};
export default AllReducers;
