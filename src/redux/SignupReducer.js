import { actionType } from "./ActionType";
const Initial_State = {
  listdragables: [
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
  ],
};
export const SignupReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case actionType.GET_Data:
      return state;
      break;
    default:
      return state;
      break;
  }
};
