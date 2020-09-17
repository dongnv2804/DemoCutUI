import { createSlice } from "@reduxjs/toolkit";

const characteristicSlice = createSlice({
  name: "characteristic",
  initialState: {},
  reducers: {
    getData(state, action) {
      state = initialState;
      return state;
    },
  },
});

export const { getData } = characteristicSlice.actions;
export default characteristicSlice.reducer;

const initialState = {
  listdragables: [
    {
      img:
        "https://1503641826.rsc.cdn77.org/Media/noiodkfycayfurjcxphglccbt_usermedia.png",
      headline: "Maecenas currabitur",
      text:
        "Aliquam justo neque, fermentum vel posuere vulputate vitae mi. Vestibulum magna tempor nisl vehicula luctus urna. Aenean augue ligula, molestie id est in, bibendum dignissim. Cras tellus nisl, laoreet at nisi venenatis.",
    },
    {
      img:
        "https://1503641826.rsc.cdn77.org/Media/noiodkfycayfurjcxphglccbt_usermedia.png",
      headline: "Maecenas currabitur",
      text:
        "Aliquam justo neque, fermentum vel posuere vulputate vitae mi. Vestibulum magna tempor nisl vehicula luctus urna. Aenean augue ligula, molestie id est in, bibendum dignissim. Cras tellus nisl, laoreet at nisi venenatis.",
    },
    {
      img:
        "https://1503641826.rsc.cdn77.org/Media/noiodkfycayfurjcxphglccbt_usermedia.png",
      headline: "Maecenas currabitur",
      text:
        "Aliquam justo neque, fermentum vel posuere vulputate vitae mi. Vestibulum magna tempor nisl vehicula luctus urna. Aenean augue ligula, molestie id est in, bibendum dignissim. Cras tellus nisl, laoreet at nisi venenatis.",
    },
  ],
};
