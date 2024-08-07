import { ioeApi } from "./api";
import { DevProps } from "./deviceApi";

export type ViewProp = {
  id: string;
  identifier: string | null;
  devices: DevProps[];
};

export type ViewWithoutID = Omit<ViewProp, "id">;

export const viewApi = ioeApi.injectEndpoints({
  endpoints: (build) => ({
    getViewsArr: build.query<ViewProp[], void>({
      query: () => "views",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Views" as const, id })),
              { type: "Views", id: "LIST" },
            ]
          : [{ type: "Views", id: "LIST" }],
    }),

    createView: build.mutation<ViewWithoutID, Partial<ViewProp>>({
      query({ identifier, devices }) {
        return {
          url: "views",
          method: "POST",
          body: { identifier, devices },
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: [{ type: "Views", id: "LIST" }],
    }),
  }),
});

export const { useGetViewsArrQuery, useCreateViewMutation } = viewApi;
