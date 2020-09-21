import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDatafromApi } from "../api/api";
import { getData, getDataSuccess } from "../Components/SignUp/signupSlice";

function* getSignup() {
  try {
    const data = yield call(fetchDatafromApi);
    yield put(getDataSuccess(data.listSignups));
  } catch (error) {}
}

export function* watchGetSignup() {
  yield takeEvery(getData.type, getSignup);
}
