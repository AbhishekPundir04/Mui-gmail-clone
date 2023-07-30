import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
   
    value: null,
  },
  reducers: {
    signin: (state,action) => {
      state.value = action.payload
    },
    signout: (state,action) => {
      state.value = action.payload
    },
  },
});

export const { signin, signout } = userSlice.actions;


export const selectUser= (state) => state.user.value;

export default userSlice.reducer;
