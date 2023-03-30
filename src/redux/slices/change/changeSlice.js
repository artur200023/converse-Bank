import { createSlice } from "@reduxjs/toolkit";

const changeSlice = createSlice({
  name: "change",
  initialState: {
    currencyRates: {},
    tabList: [],
    activeTab: ''
  },
  reducers: {
    getChangeFetch() {},
    getChangeSuccess(state, { payload }) {
      state.currencyRates = payload;
    },
    getChangeFailure() {},
    
    setTabList(state, { payload }) {
      state.tabList = payload;
    },
    setActiveTab(state, { payload }) {
      state.activeTab = payload;
    },
    
  },
 
});

export const selectChange = (state) => state.change.currencyRates;
export const selectTabs = (state) => state.change.tabList;
export const selectActiveTab = (state) => state.change.activeTab;


export const { getChangeFetch, getChangeSuccess, getChangeFailure, setTabList, setActiveTab } =
  changeSlice.actions;

export const changeReducer = changeSlice.reducer;
