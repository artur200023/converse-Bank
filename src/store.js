import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { blocksReducer } from "./redux/slices/mainSliderBlocksSlice/mainSliderBlocksSlice";
// import blockSaga from "./blocksSaga";
import { cardReducer } from "./redux/slices/cardSliderSlice/cardSliderSlice";
// import cardSaga from "./cardSaga";
import { blogReducer } from "./redux/slices/blogSlice/blogSlice";
// import blogSaga from "./blogSaga";
import { calculateReducer } from "./redux/slices/calculateDataSlice/calculateData";
// import calculateSga from "./calculateSaga";
import { rootSaga } from "./saga";
import { changeReducer } from "./redux/slices/change/changeSlice";
import { languageReducer } from "./redux/slices/languageSlice/languageSlice";

const saga = createSagaMiddleware();
const mainReducer = combineReducers({
  blocks: blocksReducer,
  cards: cardReducer,
  blogs: blogReducer,
  calculate: calculateReducer,
  change:changeReducer,
  language:languageReducer
});

const store = configureStore({
  reducer: mainReducer,
  middleware: [saga],
});
saga.run(rootSaga);

export default store;
