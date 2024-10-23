import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { JobProp } from "../jobsApi";

export type JobPropWithoutID = Omit<JobProp, "id">;

export interface JobInitStateProp {
  jobsArr: JobProp[];
  searchedJobsArr: JobProp[];
  jobData: JobProp | null;
}

const initialState: JobInitStateProp = {
  jobsArr: [],
  searchedJobsArr: [],
  jobData: null,
};

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobData(state, action: PayloadAction<JobProp | null>) {
      state.jobData = action.payload;
    },
    initJobData(state) {
      state.jobData = initialState.jobData;
    },
    setJobsArr(state, action: PayloadAction<JobProp[]>) {
      state.jobsArr = action.payload;
    },
    setSearchJobsArr(state, action: PayloadAction<JobProp[]>) {
      state.searchedJobsArr = action.payload;
    },
  },
});

export const { setJobData, initJobData, setJobsArr, setSearchJobsArr } =
  jobSlice.actions;
export default jobSlice.reducer;
