import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";

const reducer = {
  user: userReducer,
};

const store = configureStore({
  reducer,
  preloadedState: {},
});

export default store;
