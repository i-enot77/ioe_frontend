import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export type AlarmItemProp = {
    deviceName: string
    job: string
    time: string
    status: "available" | "incident" | "waiting"
}

type initAlarmProp = {
    alarmsArr: AlarmItemProp []
}

const initialState: initAlarmProp = {
    alarmsArr: []
}


export const fetchAlarms = createAsyncThunk(
    'alarms/fetchAlarms',
    async () => {
        const response = await axios.get("http://localhost:3500/alarms")
        return response.data
    }
)

export const alarmSlice = createSlice({
    name: "alarms",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAlarms.fulfilled, (state, action: PayloadAction<AlarmItemProp[]>) => {
            state.alarmsArr = action.payload
        })
    } 
})

export default alarmSlice.reducer