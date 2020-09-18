import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    listdragables: [],
  },
  reducers: {
    getData: (state, action) => ({ ...state, listdragables }),
  },
});

export const { getData } = signupSlice.actions;
export default signupSlice.reducer;

const listdragables = [
  {
    img:
      "https://1503641826.rsc.cdn77.org/Media/lumjnqfwsisugrdyqrnsuqian_usermedia.png",
    text:
      "Donec scelerisque finibus dui, in pretium ligula pharetra ut. Phasellus mattis lacus vel sagittis consequat. Nulla vitae libero placerat, molestie sapien sed, blandit nibh. Maecenas non vehicula purus.",
  },
  {
    img:
      "https://1503641826.rsc.cdn77.org/Media/lumjnqfwsisugrdyqrnsuqian_usermedia.png",
    text:
      "Donec scelerisque finibus dui, in pretium ligula pharetra ut. Phasellus mattis lacus vel sagittis consequat. Nulla vitae libero placerat, molestie sapien sed, blandit nibh. Maecenas non vehicula purus.",
  },
  {
    img:
      "https://1503641826.rsc.cdn77.org/Media/lumjnqfwsisugrdyqrnsuqian_usermedia.png",
    text:
      "Donec scelerisque finibus dui, in pretium ligula pharetra ut. Phasellus mattis lacus vel sagittis consequat. Nulla vitae libero placerat, molestie sapien sed, blandit nibh. Maecenas non vehicula purus.",
  },
];
