export const loginUser = (state, { user, idToken, refreshToken }) => {
  if (idToken) {
    localStorage.setItem("idToken", idToken);
    state.idToken = idToken;
  }

  if (refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
    state.refreshToken = refreshToken;
  }

  state.user = user;

  state.status = "authenticated";
};

export const logoutUser = (state) => {
  localStorage.removeItem("idToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");

  state.idToken = null;
  state.refreshToken = null;
  state.user = null;

  state.status = "not-authenticated";
};
