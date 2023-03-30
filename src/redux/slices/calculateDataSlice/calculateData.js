import { createSlice, current } from "@reduxjs/toolkit";
import {
  capitalPracent,
  getFilteredSetting,
  onCalculation,
} from "../../../components/calculateDeposit/utils";

const calculateSlice = createSlice({
  name: "calculate",
  initialState: {
    calculate: [],
    percent: 7.25,
    configs: {
      amount: 5000,
      duration: 184,
      iso: "֏",
      with_partial_withdrawal: false,
      with_replenishment: false,
      capitalization: false,
    },
    result: {},
    calculateInfo: {},
  },
  reducers: {
    getCalculateFetch() {},
    getCalculateSuccess(state, { payload }) {
      state.calculate = payload;
    },
    getCalculateFailure() {},

    handleConfig(state, { payload }) {
      state.configs = payload;
      const filteredData = getFilteredSetting(state.calculate, payload);
      const rate = Number(filteredData.percent) || 0;
      state.percent = rate;
      if (state.configs.with_replenishment && state.configs.duration > 365) {
        state.result = capitalPracent({
          amount: payload.amount,
          rate,
          duration: payload.duration,
        });
      } else {
        state.result = onCalculation({
          amount: payload.amount,
          rate,
          duration: payload.duration,
        });
      }
    },
    handleResult(state, { payload }) {
      state.result = payload;
    },
    handlePercent(state, { payload }) {
      state.percent = payload;
    },
    handleCalcualteInfo(state, { payload }) {
      state.calculateInfo = payload;
    },
  },
});

export const selectCalculate = (state) => state.calculate.calculate;

export const selectInp = (state) => state.calculate.configs;

export const selectPercent = (state) => state.calculate.percent;

export const selectPerc = (state) => state.calculate.amountPerc;

export const selectResult = (state) => state.calculate.result;

export const calculateInfo = (state) => state.calculate.calculateInfo;

export const {
  handleConfig,
  getCalculateFetch,
  getCalculateSuccess,
  getCalculateFailure,
  handleResult,
  handlePercent,
  handleCalcualteInfo,
} = calculateSlice.actions;

export const calculateReducer = calculateSlice.reducer;
