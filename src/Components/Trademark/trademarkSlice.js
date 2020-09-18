import { createSlice } from "@reduxjs/toolkit";

const trademarkSlice = createSlice({
  name: "trademark",
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

export const { getData, getDataSuccess } = trademarkSlice.actions;
export default trademarkSlice.reducer;
