import { call, put, takeEvery } from "redux-saga/effects";
import {
  getCalculateFailure,
  getCalculateSuccess,
} from "../slices/calculateDataSlice/calculateData";

function* workGetCalculateFetch() {
  try {
    const calculate = yield call(() =>
      fetch("http://localhost:3030/calculateData")
    );
    const formattedCalculate = yield calculate.json();
    yield put(getCalculateSuccess(formattedCalculate));
  } catch (error) {
    yield put(getCalculateFailure(error));
  }
}

function* calculateSga() {
  yield takeEvery("calculate/getCalculateFetch", workGetCalculateFetch);
}

export default calculateSga;
