import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggin: false,
  },
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      localStorage.setItem("auth", JSON.stringify(action.payload));
      state.isLoggin = true;
    },
    logout(state) {
      localStorage.removeItem("auth");
      state.isLoggin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
