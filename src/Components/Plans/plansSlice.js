import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "plan",
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

export const { getData, getDataSuccess } = planSlice.actions;
export default planSlice.reducer;
