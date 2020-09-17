import { actionType } from "./ActionType";
const Initial_State = {
  listdragables: [
    "https://1503641826.rsc.cdn77.org/Media/wjqtvaucrdmfepwcoozrklurb_usermedia.png",
    "https://1503641826.rsc.cdn77.org/Media/tbvodilxzhycuklvysqlxkbfx_usermedia.png",
    "https://1503641826.rsc.cdn77.org/Media/aeabikpzsbzyoouaheixaueow_usermedia.png",
    "https://1503641826.rsc.cdn77.org/Media/msefdjzqqdekvqwjccilwjevk_usermedia.png",
    "https://1503641826.rsc.cdn77.org/Media/qfthxfzmfwsktosaixlqqlnln_usermedia.png",
  ],
};
export const TrademarkReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case actionType.GET_Data:
      return state;
      break;
    default:
      return state;
      break;
  }
};
