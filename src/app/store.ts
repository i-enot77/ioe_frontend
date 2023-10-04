import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { sitesSlice } from './reducers/sites'
import { deviceSlice } from './reducers/devices'
import { optionSlice } from './reducers/option'
import { modemSlice } from './reducers/modems'
import { jobSlice } from './reducers/jobs'
import { sideSlice } from './reducers/sidePanel'
import { jobsPagination } from './api'
import { searchSlice } from './reducers/search'

const rootReducer = combineReducers({
    sites: sitesSlice.reducer,
    device: deviceSlice.reducer,
    option: optionSlice.reducer,
    modems: modemSlice.reducer,
    jobs: jobSlice.reducer,
    sidePanel: sideSlice.reducer,
    search: searchSlice.reducer,

    [jobsPagination.reducerPath]: jobsPagination.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(jobsPagination.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch