import { configureStore } from "@reduxjs/toolkit";
import { sitesSlice } from "./slices/sites";
import { deviceSlice } from "./slices/devices";
import { optionSlice } from "./slices/option";
import { modemSlice } from "./slices/modems";
import { jobSlice } from "./slices/jobs";
import { tabSlice } from "./slices/tabs";
import { searchSlice } from "./slices/search";
import { ioeApi } from "./api";

export const store = configureStore({
  reducer: {
    sites: sitesSlice.reducer,
    device: deviceSlice.reducer,
    option: optionSlice.reducer,
    modems: modemSlice.reducer,
    jobs: jobSlice.reducer,

    tabs: tabSlice.reducer,
    search: searchSlice.reducer,

    [ioeApi.reducerPath]: ioeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ioeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
