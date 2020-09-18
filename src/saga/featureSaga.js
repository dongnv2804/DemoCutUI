import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDatafromApi } from "../api/api";
import { getData, getDataSucess } from "../Components/Feature/featureSlice";
function* getFeatures() {
  try {
    const data = yield call(fetchDatafromApi);
    yield put(getDataSucess(data.listfeatures));
  } catch (error) {}
}

export function* watchGetFeatures() {
  yield takeEvery(getData.type, getFeatures);
}
