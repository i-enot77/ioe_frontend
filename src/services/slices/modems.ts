import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ModemsProps } from "../modemApi";

export type ModemWithoutID = Omit<ModemsProps, "id">;

export interface ModemInitStateProps {
  modemsArr: ModemsProps[];
  searchModemsArr: ModemsProps[];
  modemItem: ModemsProps;
}

const initialState: ModemInitStateProps = {
  modemsArr: [],
  searchModemsArr: [],
  modemItem: {
    id: "",
    modemName: "",
    imei: "",
    ip: "",
    version: "",
    config: null,
    location: "",
    type: "",
  },
};

export const modemSlice = createSlice({
  name: "modems",
  initialState,
  reducers: {
    initModems(state) {
      state.modemsArr = initialState.modemsArr;
    },

    setModemItem(state, action: PayloadAction<ModemsProps>) {
      state.modemItem = action.payload;
    },
    initModemItem(state) {
      state.modemItem = initialState.modemItem;
    },
    editInput(state, action: PayloadAction<Partial<ModemsProps>>) {
      state.modemItem = { ...state.modemItem, ...action.payload };
    },
    setModemArr(state, action: PayloadAction<ModemsProps[]>) {
      state.modemsArr = action.payload;
    },
    setSearchModemsArr(state, action: PayloadAction<ModemsProps[]>) {
      state.searchModemsArr = action.payload;
    },
  },
});

export const {
  initModems,
  setModemItem,
  initModemItem,
  editInput,
  setModemArr,
  setSearchModemsArr,
} = modemSlice.actions;
export default modemSlice.reducer;
