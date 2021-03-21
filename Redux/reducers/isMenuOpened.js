const opnenedMenuReducer = (state = false, action) => {
  switch (action.type) {
    case "openMenu":
      return "openMenu";
    case "closeMenu":
      return "closeMenu";
    default:
      return state;
  }
};
export default opnenedMenuReducer;
