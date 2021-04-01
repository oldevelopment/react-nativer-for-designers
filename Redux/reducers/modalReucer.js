const modalReducer = (state = "closeModal", action) => {
  switch (action.type) {
    case "openModal":
      return "openModal";
    case "closeModal":
      return "closeModal";
    default:
      return state;
  }
};
export default modalReducer;
