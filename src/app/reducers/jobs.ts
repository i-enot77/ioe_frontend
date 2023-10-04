import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'



export type JobProp = {
    id?: number
    deviceName?: string
    period?: number
    startDate: string
    stopDate: string
    read: undefined | number
    readParams?: string
    status?: string
    type?: string
    [key: string]: number | string | undefined
  }

  export interface JobInitStateProp {
    jobsArr: JobProp[] ,
    searchedJobsArr: JobProp[],
    periodicJobData: JobProp,
    jobData: JobProp
  }

  const initialState: JobInitStateProp = {
    jobsArr: [],
    searchedJobsArr: [],
    periodicJobData: {
        id: undefined,
        deviceName: "",
        period: undefined,
        startDate: "",
        stopDate: "",
        read: undefined,
        readParams: undefined,
        status: "",
        type: ""
      },
      jobData: {
        id: undefined,
        deviceName: "",
        read: undefined,
        readParams: undefined,
        status: "",
        startDate: "",
        stopDate: "",
      }
      
  }

  export const fetchJobs = createAsyncThunk(
    'jobs/fetchJobs',
    async () => {
        const response = await axios.get("http://localhost:3500/jobs")
        return response.data
      }
  )

  export const fetchJobItem = createAsyncThunk(
    'jobs/fetchJobItem',
    async (id: JobProp["id"]) => {
        const response = await axios.get(`http://localhost:3500/jobs/${id}`)
        return response.data
      }
  )

  export const addPeriodicJob = createAsyncThunk(
    'jobs/addPeriodicJob',
    async (periodicJobData: JobProp) => {
      const response = await axios.post(
        "http://localhost:3500/jobs",
        periodicJobData
      )
      return response.data
    }
  )

  export const addJob = createAsyncThunk(
    'jobs/addJob',
    async (jobData: JobProp) => {
      const response = await axios.post(
        "http://localhost:3500/jobs",
        jobData
      )
      return response.data
    }
  )

  export const updatePeriodicJob = createAsyncThunk(
    'jobs/updatePeriodicJob',
    async (periodicJobData: JobProp) =>{
      const {id, ...data} = periodicJobData
      const res = await axios.put(
        `http://localhost:3500/jobs/${id}`, data )
        return {...res.data}
    }
  )

  export const deleteJob = createAsyncThunk(
    'jobs/deleteJob',
    async (id: JobProp["id"]) => {
        axios.delete(`http://localhost:3500/jobs/${id}`)
        return id
    }
  )

  export const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        updatePeriodicJobInput(state, action: PayloadAction<Partial<JobProp>>) {
            state.periodicJobData = { ...state.periodicJobData, ...action.payload }
        },
        updateJobInput(state, action: PayloadAction<Partial<JobProp>>) {
            state.jobData = { ...state.jobData, ...action.payload }
        },
        setPeriodicJobData(state, action:PayloadAction<JobProp>) {
            state.periodicJobData = action.payload
        },
        setJobsArr(state, action:PayloadAction<JobProp[]>) {
            state.jobsArr = action.payload
        },
        setSearchJobsArr(state, action:PayloadAction<JobProp[]>) {
          state.searchedJobsArr = action.payload
      },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchJobs.fulfilled, (state, action:PayloadAction<JobProp[]>) => {
            state.jobsArr = action.payload
        })
        .addCase(fetchJobItem.fulfilled, (state, action:PayloadAction<JobProp>) => {
          state.periodicJobData  = action.payload
        })
        .addCase(addPeriodicJob.fulfilled, (state, action:PayloadAction<JobProp>) => {
            state.jobsArr = [...state.jobsArr, action.payload]
            state.periodicJobData = initialState.periodicJobData
        })
        .addCase(addJob.fulfilled, (state, action:PayloadAction<JobProp>) => {
            state.jobsArr = [...state.jobsArr, action.payload]
            state.jobData = initialState.jobData
        })
        .addCase(updatePeriodicJob.fulfilled, (state, action:PayloadAction<JobProp>) => {
            state.jobsArr = state.jobsArr.map(item => item.id === state.periodicJobData.id ? action.payload : item)
            state.periodicJobData = initialState.periodicJobData
        })
        .addCase(deleteJob.fulfilled, (state, action) => {
            state.jobsArr = state.jobsArr.filter((job) => job.id !== action.payload)
        })
    }
  })

  export const {updatePeriodicJobInput, updateJobInput, setPeriodicJobData, setJobsArr, setSearchJobsArr} = jobSlice.actions
  export default jobSlice.reducer