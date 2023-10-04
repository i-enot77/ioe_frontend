import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type JobProp = {
    id?: number
    deviceName?: string
    period?: number
    startDate: string
    stopDate: string
    read: undefined | number
    readParams?: string
    status?: string
    type?: string
  }

  type JobsResponse = JobProp[]

  export const jobsPagination = createApi({
    reducerPath: 'jobsPagination',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/' }),
    tagTypes: ['Jobs'],
    endpoints: (build) => ({
        getPaginatedJobs: build.query<JobsResponse, { page?: number; limit?: number }>({
            query: ({ page = 1, limit = 10 }) => `jobs?_page=${page}&_limit=${limit}`,
            providesTags: (result, error, { page = 1, limit = 10 }) => [
              { type: 'Jobs', id: 'PARTIAL-LIST' },
              { type: 'Jobs', id: `PAGE-${page}-LIMIT-${limit}` },
            ],
        }),
        getJobItem: build.query<JobProp, number | undefined>({
          query: (id) => `jobs/${id}`,
          providesTags: (result, error, id) => [{ type: 'Jobs', id }],
      }),
        getJobsArr: build.query<JobsResponse, void>({
          query: () => 'jobs',
          providesTags: (result) => 
         result ? 
         [
            ...result.map(({ id }) => ({ type: 'Jobs', id } as const)),
            {type: 'Jobs'}
          ]
        : [{ type: 'Jobs' }]
        }),
        addJobItem: build.mutation<JobProp, JobProp>({
          query: (data) => ({
            url: 'jobs',
            method: 'POST',
            body: data
          }),
          invalidatesTags: [{type: 'Jobs'}]
        }),
        updateJobItem: build.mutation<JobProp, JobProp>({
          query: (data) => ({
              url: `jobs/${data.id}`,
              method: 'PUT',
              body: data
          }),
          invalidatesTags: (result, error, {id}) => [{ type: 'Jobs', id }, { type: 'Jobs', id: 'PARTIAL-LIST' } ]
        }),
        deleteJobItem: build.mutation<{ success: boolean; id: number }, number | undefined>({
          query: (id) => ({
            url: `jobs/${id}`,
            method: 'DELETE'
          }),
          invalidatesTags: (result, error, id) => [{type: 'Jobs', id}]
        })

    })
  })
 
  export const { useGetPaginatedJobsQuery, useGetJobItemQuery, useGetJobsArrQuery, useAddJobItemMutation, useUpdateJobItemMutation, useDeleteJobItemMutation  } = jobsPagination