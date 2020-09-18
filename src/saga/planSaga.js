import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDatafromApi } from "../api/api";
import { getData, getDataSuccess } from "../Components/Plans/plansSlice";

function* getPlans() {
  try {
    const data = yield call(fetchDatafromApi);
    yield put(getDataSuccess(data.listPlans));
  } catch (error) {}
}

export function* watchGetPlans() {
  yield takeEvery(getData.type, getPlans);
}
