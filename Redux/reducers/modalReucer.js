const modalReducer = (state, action) => {
  switch (action.type) {
    case "openModal":
      return "openModal";
    case "closeModal":
      return "closeModal";
    default:
      return "closeModal";
  }
};
export default modalReducer;
