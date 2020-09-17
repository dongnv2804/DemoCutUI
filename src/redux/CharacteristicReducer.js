import { actionType } from "./ActionType";
const Initial_State = {
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
export const CharacteristicReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case actionType.GET_Data:
      return state;
      break;
    default:
      return state;
      break;
  }
};
