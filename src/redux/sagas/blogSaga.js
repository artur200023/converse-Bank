import { call, put, takeEvery } from "redux-saga/effects";
import {
  getBlogsFailure,
  getBlogsSuccess,
} from "../slices/blogSlice/blogSlice";

function* workGetBlogsFetch() {
  try {
    const blogs = yield call(() => fetch("http://localhost:3030/blogs"));
    const formattedBlogs = yield blogs.json();
    yield put(getBlogsSuccess(formattedBlogs));
  } catch (error) {
    yield put(getBlogsFailure(error));
  }
}

function* blogSaga() {
  yield takeEvery("blogs/getBlogsFetch", workGetBlogsFetch);
}

export default blogSaga;
