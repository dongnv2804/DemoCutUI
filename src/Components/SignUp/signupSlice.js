import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    listdragables: [],
    infosignup: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  },
  reducers: {
    getData: (state, action) => state,
    getDataSuccess: (state, action) => ({
      ...state,
      listdragables: action.payload,
    }),
    signUp: (state, action) => {
      const { name, email, phone, password = "" } = action.payload;
      return { ...state, infosignup: { name, email, phone, password } };
    },
  },
});

export const { getData, getDataSuccess, signUp } = signupSlice.actions;
export default signupSlice.reducer;
