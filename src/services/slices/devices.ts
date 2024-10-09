import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { DevProps } from "../deviceApi";

export type DevPropsWithoutId = Omit<DevProps, "id">;

export interface DevInitStateProps {
  devices: DevProps[];
  deviceData: DevProps | null;
}

const initialState: DevInitStateProps = {
  devices: [],
  deviceData: null,
};

// export const fetchDevices = createAsyncThunk(
//   "device/fetchDevices",
//   async () => {
//     const res = await axios.get("http://localhost:3500/devices");
//     return res.data;
//   }
// );

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDeviceData(state, action: PayloadAction<DevProps | null>) {
      state.deviceData = action.payload;
    },
    addDevice(state, action: PayloadAction<DevProps>) {
      state.devices.push(action.payload);
    },
    initDevData(state) {
      state.deviceData = initialState.deviceData;
    },
    setDevArr(state, action: PayloadAction<DevProps[]>) {
      state.devices = action.payload;
    },
  },
});

export const { setDeviceData, addDevice, initDevData, setDevArr } =
  deviceSlice.actions;
export default deviceSlice.reducer;
