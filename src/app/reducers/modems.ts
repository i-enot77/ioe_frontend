import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export type ModemsArrProps = {
    id?: number
    name: string
    imei: string
    ip: string
    version: string
    config: string
    location: string
    type: string
    [key: string]: any
  }

  export interface ModemInitStateProps {
    modemsArr: ModemsArrProps[]
    searchModemsArr: ModemsArrProps[]
    modemItem: ModemsArrProps
  }

  const initialState: ModemInitStateProps = {
    modemsArr: [],
    searchModemsArr: [],
    modemItem: {
      id: undefined,
      name: "",
      imei: "",
      ip: "",
      version: "",
      config: "",
      location: "",
      type: ""
    }
  }

  export const fetchModems = createAsyncThunk(
    'modems/fetchModems',
    async () => {
        const res = await axios.get("http://localhost:3500/modems")
      return res.data
  }
  )

  export  const updateModemItem = createAsyncThunk(
    'modems/updateModemItem',
    async (ModemItem: ModemsArrProps) => {
      const {id, ...data} = ModemItem
      const res = await axios.put(
        `http://localhost:3500/modems/${id}`, data )
        return {...res.data}
    }
  )

  export const modemSlice = createSlice ({
    name: "modems",
    initialState,
    reducers:{
        initModems(state){
            state.modemsArr = initialState.modemsArr
        },
        setModemItem(state, action:PayloadAction<ModemsArrProps["id"]>) {
          const getModem = state.modemsArr.filter((item) => item.id === action.payload)
          state.modemItem = getModem[0]
        },
        initModemItem(state){
          state.modemItem = initialState.modemItem
        },
        editInput(state, action: PayloadAction<Partial<ModemsArrProps>>){
          state.modemItem = {...state.modemItem, ...action.payload}
        },
        setModemArr(state, action: PayloadAction<ModemsArrProps[]>){
          state.modemsArr = action.payload
        },
        setSearchModemsArr(state, action: PayloadAction<ModemsArrProps[]>){
          state.searchModemsArr = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchModems.fulfilled, (state, action:PayloadAction<ModemsArrProps[]>) => {
            state.modemsArr = action.payload
            state.searchModemsArr = action.payload
        })
        .addCase(updateModemItem.fulfilled, (state, action: PayloadAction<ModemsArrProps>) => {
          state.modemsArr = state.modemsArr.map(item => item.id === state.modemItem.id ? action.payload : item)
          state.modemItem = initialState.modemItem
        })
    }
  })

  export const {initModems, setModemItem, initModemItem, editInput, setModemArr, setSearchModemsArr} = modemSlice.actions
  export default modemSlice.reducer