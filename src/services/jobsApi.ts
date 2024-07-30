import { ioeApi } from "./api";

export type JobProp = {
  id: string;
  deviceName: string;
  period: number;
  startDate: Date | null; //returned as Date from backend side
  stopDate: Date | null;
  read: number;
  readParams?: {
    params: string;
  } | null;
  status: string; //"running" | "waiting" | "failing";
  type: string;
};

export const jobsApi = ioeApi.injectEndpoints({
  endpoints: (build) => ({
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
    getPaginatedJobs: build.query<JobProp[], { page?: number; limit?: number }>(
      {
        query: ({ page = 1, limit = 10 }) =>
          `jobs?_page=${page}&_limit=${limit}`,
        providesTags: (result, error, { page = 1, limit = 10 }) => [
          { type: "Jobs", id: "LIST" },
          { type: "Jobs", id: `PAGE-${page}-LIMIT-${limit}` },
        ],
      }
    ),
    getJobItem: build.query<JobProp, number>({
      query: (id) => `jobs/${id}`,
      providesTags: (result, error, id) => [{ type: "Jobs", id }],
    }),

    addJobItem: build.mutation<JobProp, Partial<JobProp>>({
      query(body) {
        return {
          url: "jobs",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Jobs", id: "LIST" }],
    }),
    updateJobItem: build.mutation<JobProp, Partial<JobProp>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `jobs/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "Jobs", id },
        { type: "Jobs", id: "LIST" },
      ],
    }),
    deleteJobItem: build.mutation<{ success: boolean; id: string }, string>({
      query(id) {
        return {
          url: `jobs/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [
        { type: "Jobs", id },
        { type: "Jobs", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetJobsArrQuery,
  useGetPaginatedJobsQuery,
  useLazyGetJobItemQuery,
  useAddJobItemMutation,
  useUpdateJobItemMutation,
  useDeleteJobItemMutation,
} = jobsApi;
