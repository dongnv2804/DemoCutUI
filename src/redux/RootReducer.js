import { combineReducers } from "redux";
import characteristicReducer from "../Components/Characteristic/CharacteristicSlice";
import featureReducer from "../Components/Feature/featureSlice";
import feedbackReducer from "../Components/Feedback/feedbackSlice";
import planReducer from "../Components/Plans/plansSlice";
import signupReducer from "../Components/SignUp/signupSlice";
import trademarkReducer from "../Components/Trademark/trademarkSlice";
export const rootReducer = combineReducers({
  characteristics: characteristicReducer,
  features: featureReducer,
  feedbacks: feedbackReducer,
  plans: planReducer,
  signups: signupReducer,
  trademarks: trademarkReducer,
});
