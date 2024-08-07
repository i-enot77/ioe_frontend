import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitOptionProp {
  option:
    | "addDevice"
    | "assignDevice"
    | "editDevice"
    | "deleteDevice"
    | "addJob"
    | "editJob"
    | "deleteJob"
    | null;

  isViewModal: boolean;
}

const initialState: InitOptionProp = {
  option: null,
  isViewModal: false,
};
export const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    addDeviceOption(state) {
      state.option = "addDevice";
    },
    assignDeviceOption(state) {
      state.option = "assignDevice";
    },
    editDeviceOption(state) {
      state.option = "editDevice";
    },
    delDeviceOption(state) {
      state.option = "deleteDevice";
    },
    addJobOption(state) {
      state.option = "addJob";
    },
    editJobOption(state) {
      state.option = "editJob";
    },
    deleteJobOption(state) {
      state.option = "deleteJob";
    },
    initOption(state) {
      state.option = initialState.option;
    },

    toggleViewModal(state, action: PayloadAction<boolean>) {
      state.isViewModal = action.payload;
    },
  },
});

export const {
  addDeviceOption,
  assignDeviceOption,
  editDeviceOption,
  delDeviceOption,
  addJobOption,
  editJobOption,
  deleteJobOption,
  initOption,
  toggleViewModal,
} = optionSlice.actions;
export default optionSlice.reducer;
