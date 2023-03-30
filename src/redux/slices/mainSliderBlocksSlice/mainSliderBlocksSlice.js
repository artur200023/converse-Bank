import { createSlice } from "@reduxjs/toolkit";

const blocksSlice = createSlice({
  name: "blocks",
  initialState: {
    blocks: [],
  },

  reducers: {
    getBlocksFetch() {},
    getBlocksSuccess(state, { payload }) {
      state.blocks = payload;
    },
    getBlocksFailure() {},
  },
});

export const blockSelect = (state) => state.blocks.blocks;

export const { getBlocksFetch, getBlocksSuccess, getBlocksFailure } =
  blocksSlice.actions;

export const blocksReducer = blocksSlice.reducer;
