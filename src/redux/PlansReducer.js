import { actionType } from "./ActionType";
const Initial_State = {
  listdragables: [
    {
      price: 0,
      headline: "BASIC",
      content: [
        "Lorem ipsum dolor sit",
        "Amet nusce agestas",
        "Maecenas gravida ullacomper",
      ],
      activeshape: false,
      textbutton: "GET FOR FREE",
      colorbutton: "#11cab6",
    },
    {
      price: 49,
      headline: "STANDARD",
      content: [
        "Fusce fabulus lobortis",
        "Egestas fibinus efficur et",
        "Henderit rutrum pretium sit",
      ],
      activeshape: true,
      textbutton: "SIGN UP NOW",
      colorbutton: "#f26347",
    },
    {
      price: 149,
      headline: "ENTERPRISE",
      content: [
        "Fusce fabulus lobortis",
        "Egestas fibinus efficur et",
        "Henderit rutrum pretium sit",
      ],
      activeshape: false,
      textbutton: "SIGN UP NOW",
      colorbutton: "#11cab6",
    },
  ],
};
export const PlansReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case actionType.GET_Data:
      return state;
      break;
    default:
      return state;
      break;
  }
};
