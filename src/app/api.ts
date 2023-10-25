import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ModemsArrProps } from "./reducers/modems";
import { DevArrProps } from "./reducers/devices";
import { SiteItemProp } from "./reducers/sites";

type JobProp = {
  id?: number;
  deviceName?: string;
  period?: number;
  startDate: string;
  stopDate: string;
  read?: number;
  readParams?: string;
  status?: "running" | "waiting" | "failing";
  type?: string;
};

export const ioeApi = createApi({
  reducerPath: "ioeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500/" }),
  tagTypes: ["Jobs", "Modems", "Devices", "Sites"],
  endpoints: (build) => ({
    getPaginatedJobs: build.query<JobProp[], { page?: number; limit?: number }>(
      {
        query: ({ page = 1, limit = 10 }) =>
          `jobs?_page=${page}&_limit=${limit}`,
        providesTags: (result, error, { page = 1, limit = 10 }) => [
          { type: "Jobs", id: "PARTIAL-LIST" },
          { type: "Jobs", id: `PAGE-${page}-LIMIT-${limit}` },
        ],
      }
    ),
    getJobItem: build.query<JobProp, number | undefined>({
      query: (id) => `jobs/${id}`,
      providesTags: (result, error, id) => [{ type: "Jobs", id }],
    }),
    getJobsArr: build.query<JobProp[], void>({
      query: () => "jobs",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Jobs" as const, id })),
              { type: "Jobs", id: "LIST" },
            ]
          : [{ type: "Jobs", id: "LIST" }],
    }),
    addJobItem: build.mutation<JobProp, JobProp>({
      query: (data) => ({
        url: "jobs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Jobs" }],
    }),
    updateJobItem: build.mutation<JobProp, JobProp>({
      query: (data) => ({
        url: `jobs/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Jobs", id },
        { type: "Jobs", id: "PARTIAL-LIST" },
      ],
    }),
    deleteJobItem: build.mutation<
      { success: boolean; id: number },
      number | undefined
    >({
      query: (id) => ({
        url: `jobs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Jobs", id }],
    }),
    //modems,devices fetch
    getModems: build.query<ModemsArrProps[], void>({
      query: () => "modems",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Modems" as const, id })),
              { type: "Modems", id: "LIST" },
            ]
          : [{ type: "Modems", id: "LIST" }],
    }),
    getDevices: build.query<DevArrProps[], void>({
      query: () => "devices",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Devices" as const, id })),
              { type: "Devices", id: "LIST" },
            ]
          : [{ type: "Devices", id: "LIST" }],
    }),
    getSites: build.query<SiteItemProp[], void>({
      query: () => "sites",
    }),
  }),
});

export const {
  useGetPaginatedJobsQuery,
  useGetJobItemQuery,
  useGetJobsArrQuery,
  useAddJobItemMutation,
  useUpdateJobItemMutation,
  useDeleteJobItemMutation,
  useGetModemsQuery,
  useGetDevicesQuery,
  useGetSitesQuery,
} = ioeApi;
