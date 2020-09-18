import { createSlice } from "@reduxjs/toolkit";

const trademarkSlice = createSlice({
  name: "trademark",
  initialState: {
    listdragables: [],
  },
  reducers: {
    getData: (state, action) => ({ ...state, listdragables }),
  },
});

export const { getData } = trademarkSlice.actions;
export default trademarkSlice.reducer;

const listdragables = [
  "https://1503641826.rsc.cdn77.org/Media/wjqtvaucrdmfepwcoozrklurb_usermedia.png",
  "https://1503641826.rsc.cdn77.org/Media/tbvodilxzhycuklvysqlxkbfx_usermedia.png",
  "https://1503641826.rsc.cdn77.org/Media/aeabikpzsbzyoouaheixaueow_usermedia.png",
  "https://1503641826.rsc.cdn77.org/Media/msefdjzqqdekvqwjccilwjevk_usermedia.png",
  "https://1503641826.rsc.cdn77.org/Media/qfthxfzmfwsktosaixlqqlnln_usermedia.png",
];
