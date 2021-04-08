// Action: Changes the state
export const enableGesture = () => ({ type: "enableGesture" });
export const disableGesture = () => ({ type: "disableGesture" });
export const openModal = () => ({ type: "openModal" });
export const closeModal = () => ({ type: "closeModal" });
export const openMenu = () => ({ type: "openMenu" });
export const closeMenu = () => ({ type: "closeMenu" });
export const updateName = (name) => ({ type: "updateName", name: name });
export const updateAvatar = (avatar) => ({
  type: "updateAvatar",
  avatar: avatar,
});
export const openNotif = () => ({ type: "openNotif" });
export const closeNotif = () => ({ type: "closeNotif" });
