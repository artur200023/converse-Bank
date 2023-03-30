import { call, put, takeEvery } from "redux-saga/effects";
import {
  getCardsFailure,
  getCardsSuccess,
} from "../slices/cardSliderSlice/cardSliderSlice";

function* workGetCardsFetch() {
  try {
    const cards = yield call(() => fetch("http://localhost:3030/cards"));
    const formattedCards = yield cards.json();
    yield put(getCardsSuccess(formattedCards));
  } catch (error) {
    yield put(getCardsFailure(error));
  }
}

function* cardSaga() {
  yield takeEvery("cards/getCardsFetch", workGetCardsFetch);
}

export default cardSaga;
