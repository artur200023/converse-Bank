import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    isLoading: false,
  },
  reducers: {
    getBlogsFetch(state) {
      state.isLoading = true;
    },
    getBlogsSuccess(state, { payload }) {
      state.blogs = payload;
    },
    getBlogsFailure() {},
  },
});

export const blogSelect = (state) => state.blogs.blogs;

export const { getBlogsFetch, getBlogsSuccess, getBlogsFailure } =
  blogSlice.actions;

export const blogReducer = blogSlice.reducer;
