import { loginUser, logout, registerUser, loginWithGoogle } from "./auth";

export const server = {
  //Auth
  registerUser,

  logout,
  loginUser,
  loginWithGoogle,
};
