import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


export type SearchProp = {
    filterBy: string
    responseArr: any
}

const initialState: SearchProp = {
    filterBy: '',
    responseArr: []
}

export const searchRequest = createAsyncThunk(
    'search/searchRequest',
    async ({filter, search}: {filter: string; search: string}) => {
        const response =  axios.get(`http://localhost:3500/${filter}?name=${search}`)
        return response
    }
)

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setFilterBy(state, action: PayloadAction<string>) {
            state.filterBy = action.payload.toLocaleLowerCase()
            console.log(state.filterBy)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(searchRequest.fulfilled, (state, action) => {
            state.responseArr = action.payload
            console.log(state.responseArr)
        })
    }
})

export const { setFilterBy } = searchSlice.actions
export default searchSlice.reducer