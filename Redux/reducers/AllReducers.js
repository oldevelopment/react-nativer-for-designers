const initalState = {
  action: "",
  name: "Stranger",
  avatar: require("../../assets/sad-avatar.png"),
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
    case "updateAvatar":
      return { ...state, avatar: action.avatar };
    default:
      return state;
  }
};
export default AllReducers;
