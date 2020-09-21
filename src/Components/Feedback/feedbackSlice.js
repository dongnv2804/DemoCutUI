import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
  name: "feedback",
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

export const { getData, getDataSuccess } = feedbackSlice.actions;
export default feedbackSlice.reducer;
