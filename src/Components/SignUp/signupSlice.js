import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    listdragables: [],
  },
  reducers: {
    getData: (state, action) => state,
    getDataSuccess: (state, action) => ({
      ...state,
      listdragables: action.payload,
    }),
  },
});

export const { getData, getDataSuccess } = signupSlice.actions;
export default signupSlice.reducer;
