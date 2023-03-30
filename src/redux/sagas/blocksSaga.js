import { call, put, takeEvery } from "redux-saga/effects";
import {
  getBlocksFailure,
  getBlocksSuccess,
} from "../slices/mainSliderBlocksSlice/mainSliderBlocksSlice";

function* workGetBlocksFetch() {
  try {
    const blocks = yield call(() => fetch("http://localhost:3030/blocks"));
    const formattedBlocks = yield blocks.json();
    yield put(getBlocksSuccess(formattedBlocks));
  } catch (error) {
    yield put(getBlocksFailure(error));
  }
}

function* blockSaga() {
  yield takeEvery("blocks/getBlocksFetch", workGetBlocksFetch);
}

export default blockSaga;
