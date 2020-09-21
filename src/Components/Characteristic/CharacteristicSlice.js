import { createSlice } from "@reduxjs/toolkit";

const characteristicSlice = createSlice({
  name: "characteristic",
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

export const { getData, getDataSuccess } = characteristicSlice.actions;
export default characteristicSlice.reducer;

