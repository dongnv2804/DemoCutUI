import { all } from "redux-saga/effects";
import { watchGetCharacter } from "./characterSaga";
import { watchGetFeatures } from "./featureSaga";
import { watchGetFeedbacks } from "./feedbackSaga";
import { watchGetPlans } from "./planSaga";
import { watchGetSignup } from "./signupSaga";
import { watchGetTrademarks } from "./trademarkSaga";
export default function* rootSaga() {
  yield all([
    watchGetCharacter(),
    watchGetFeatures(),
    watchGetFeedbacks(),
    watchGetPlans(),
    watchGetSignup(),
    watchGetTrademarks(),
  ]);
}
