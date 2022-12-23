import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userName: null,
  email: null,
  userDetails: null,
};

const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userName = action.payload.userName;
      state.userDetails = action.payload.userDetails;
    },
    setSignOut: (state) => {
      state.email = null;
      state.userName = null;
      state.isLoggedIn = false;
      state.userDetails = null;
    },
  },
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectUserName = (state) => state.userAuth.email;
export const selectUser = (state) => state.userAuth.userName;
export const selectUserDetails = (state) => state.userAuth.userDetails;

export default authSlice.reducer;
