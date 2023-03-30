import { call, put, takeEvery } from "redux-saga/effects";
import {
  getChangeFailure,
  getChangeSuccess,
  setActiveTab,
  setTabList,
} from "../slices/change/changeSlice";

function* worketChangeFetch() {
  try {
    const change = yield call(() =>
      fetch("http://localhost:3030/currencyRates")
    );
    const formattedChange = yield change.json();
    const tabList = [];

    if (Object.keys(formattedChange).length) {
      for (const key in formattedChange) {
        tabList.push({ id: key, name: key });
      }

      yield put(setActiveTab(tabList[0].id));
    }

    yield put(setTabList(tabList));

    yield put(getChangeSuccess(formattedChange)); //
  } catch (error) {
    yield put(getChangeFailure(error)); //
  }
}

function* changeSaga() {
  yield takeEvery("change/getChangeFetch", worketChangeFetch);
}

export default changeSaga;
