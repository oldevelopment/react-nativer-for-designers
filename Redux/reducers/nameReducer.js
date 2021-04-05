const nameReducer = (state, action) => {
  // switch (action.type) {
  //   case "updateName":
  //     return action.name;
  //   default:
  //     return "user-email";
  // }
  if ((action.type = "updateName")) {
    return action.name ? action.name : "user";
  }
};
export default nameReducer;
