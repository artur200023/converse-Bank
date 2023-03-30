import cardSaga from "./redux/sagas/cardSaga";
import calculateSga from './redux/sagas/calculateSaga'
import blogSaga from './redux/sagas/blogSaga'
import blockSaga from '../src/redux/sagas/blocksSaga'
import { all, fork } from "redux-saga/effects";
import changeSaga from "./redux/sagas/changeSaga";


export function* rootSaga () {
    yield all([
        fork(cardSaga),
        fork(calculateSga),
        fork(blogSaga),
        fork(blockSaga),
        fork(changeSaga)
    ])
}