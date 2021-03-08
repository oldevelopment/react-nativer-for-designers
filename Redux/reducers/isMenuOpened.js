const opnenedMenuReducer = (state = false, action) => {
  switch (action.type) {
    case "openMenu":
      return true;
    case "closeMenu":
      return false;
    default:
      return state;
  }
};
export default opnenedMenuReducer;
