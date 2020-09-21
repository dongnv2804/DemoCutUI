import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDatafromApi } from "../api/api";
import { getData, getDataSuccess } from "../Components/Feedback/feedbackSlice";

function* getFeedbacks() {
  try {
    const data = yield call(fetchDatafromApi);
    yield put(getDataSuccess(data.listFeebacks));
  } catch (error) {}
}

export function* watchGetFeedbacks() {
  yield takeEvery(getData.type, getFeedbacks);
}
