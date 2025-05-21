import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData(state, action) {
      return action.payload;
    },
    setProfileStatus(state, action) {
      console.log("action.payload", action.payload);
      state.status = action.payload;
    },
  },
});

export const { setProfileData, setProfileStatus } = profileSlice.actions;

export default profileSlice.reducer;
