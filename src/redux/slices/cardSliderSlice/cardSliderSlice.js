import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
  },
  reducers: {
    getCardsFetch() {
    },
    getCardsSuccess(state, { payload }) {
      state.cards = payload;
    },
    getCardsFailure() {},
  },
});

export const cardSelect = (state) => state.cards.cards;

export const { getCardsFetch, getCardsSuccess, getCardsFailure } =
  cardSlice.actions;

export const cardReducer = cardSlice.reducer;
