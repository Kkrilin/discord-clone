import { configureStore } from "@reduxjs/toolkit";

// slice
import profileReducer from "./slice/profileSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
