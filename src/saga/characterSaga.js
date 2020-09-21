import { fetchDatafromApi } from "../api/api";
import {
  getData,
  getDataSuccess,
} from "../Components/Characteristic/CharacteristicSlice";
import { call, put, takeEvery } from "redux-saga/effects";

function* getCharacter() {
  try {
    const data = yield call(fetchDatafromApi);
    yield put(getDataSuccess(data.listCharacters));
  } catch (error) {}
}

export function* watchGetCharacter() {
  yield takeEvery(getData.type, getCharacter);
}
