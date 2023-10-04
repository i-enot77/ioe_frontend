import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


export type DevArrProps = {
    id?: number | undefined
    serialNumber: string
    modem: string
    devName: string
    type: string
    loginInfo?: any
    timezone?: string
    site?: string
    [key: string]: any
  }

  export interface DevInitStateProps {
    devices: DevArrProps []
    deviceData: DevArrProps
  }

  const initialState: DevInitStateProps = {
    devices: [],
    deviceData: {
        id: undefined,
        serialNumber: "",
        modem: "",
        devName: "",
        type: "",
        loginInfo: "",
        timezone: "",
        site: "",
      }
  }

  export const fetchDevices = createAsyncThunk(
    'device/fetchDevices',
    async () => {
        const res = await axios.get("http://localhost:3500/devices")
      return res.data
  }
  )

  export const addDevice = createAsyncThunk(
    'device/addDevice',
    async (deviceData: DevArrProps) => {
      const response = await axios.post(
        "http://localhost:3500/devices",
        deviceData
      )
      return response.data
    }
  )

  export const editDevice = createAsyncThunk(
    'device/editDevices',
    async () => {
      const response = await axios.get("http://localhost:3500/devices")
      return response.data
    }
  )

  export const updateDevice = createAsyncThunk(
    'device/updateDevice',
    async (deviceData: DevArrProps) =>{
      const {id, ...data} = deviceData
      const res = await axios.put(
        `http://localhost:3500/devices/${id}`, data )
        return {...res.data}
    }
  )

  export const deleteDevice = createAsyncThunk(
    'device/deleteDevice',
    async (id:DevArrProps["id"]) => {
      axios.delete(`http://localhost:3500/devices/${id}`)
      return id
    }
  )

  export const deleteAllDev = createAsyncThunk(
    'device/deleteAllDev',
    async () => {
      axios.delete("http://localhost:3500/devices")
    }
  )

  export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        updateDevField(state, action: PayloadAction<Partial<DevArrProps>>) {
            state.deviceData = { ...state.deviceData, ...action.payload }
        },
        setDeviceData(state, action: PayloadAction<DevArrProps>){
          state.deviceData = action.payload
        },
        setDevDataById(state, action: PayloadAction<DevArrProps["id"]>){
          const getDevice = state.devices.filter((item) => item.id === action.payload)
          state.deviceData = getDevice[0]
        },
        setDevices(state, action: PayloadAction<DevArrProps[]>){
          state.devices = action.payload
        }
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchDevices.fulfilled, (state, action:PayloadAction<DevArrProps[]> ) => {
        state.devices = action.payload
      })
      .addCase(addDevice.fulfilled, (state, action:PayloadAction<DevArrProps>) => {
        state.devices = [...state.devices, action.payload]
        state.deviceData = initialState.deviceData
      })
      .addCase(editDevice.fulfilled, (state, action: PayloadAction<DevArrProps[]>) => {
        state.devices = action.payload
      })
      .addCase(updateDevice.fulfilled, (state, action) => {
        state.devices = state.devices.map(item => item.id === state.deviceData.id ? action.payload : item)
        state.deviceData = initialState.deviceData
      })
      .addCase(deleteDevice.fulfilled, (state, action) => {
        state.devices = state.devices.filter((device) => device.id !== action.payload)
      })
      .addCase(deleteAllDev.fulfilled, (state) => {
        state.devices = []
      })
    }
  })

  export const { updateDevField, setDeviceData, setDevDataById, setDevices } = deviceSlice.actions
  export default deviceSlice.reducer
