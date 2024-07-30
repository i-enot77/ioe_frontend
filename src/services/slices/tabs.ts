import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EditTabDetail {
  isDeviceTab: string;
}

const initialState: EditTabDetail = {
  isDeviceTab: "modem",
};

export const tabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    changeTab(state, action: PayloadAction<string>) {
      state.isDeviceTab = action.payload;
    },
  },
});

export const { changeTab } = tabSlice.actions;
export default tabSlice.reducer;
