import { combineReducers } from "redux";
import { CharacteristicReducer } from "./CharacteristicReducer";
import { FeatureReducer } from "./FeatureReducer";
import { FeedbackReducer } from "./FeedbackReducer";
import { PlansReducer } from "./PlansReducer";
import { SignupReducer } from "./SignupReducer";
import { TrademarkReducer } from "./TrademarkReducer";
export const rootReducer = combineReducers({
  CharacteristicReducer,
  FeatureReducer,
  FeedbackReducer,
  PlansReducer,
  SignupReducer,
  TrademarkReducer,
});
