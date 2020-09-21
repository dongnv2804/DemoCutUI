import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDatafromApi } from "../api/api";
import {
  getData,
  getDataSuccess,
} from "../Components/Trademark/trademarkSlice";

function* getTrademarks() {
  try {
    const data = yield call(fetchDatafromApi);
    yield put(getDataSuccess(data.listTrademarks));
  } catch (error) {}
}

export function* watchGetTrademarks() {
  yield takeEvery(getData.type, getTrademarks);
}
