import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    code: localStorage.getItem("locale") || "en",
  },
  reducers: {
    setLanguage: (state, { payload }) => {
      state.code = payload;
      localStorage.setItem("locale", payload);
    },
  },
});

export const selectLanguage = (state) => state.language.code;

export const { setLanguage } = languageSlice.actions;

export const languageReducer = languageSlice.reducer;
