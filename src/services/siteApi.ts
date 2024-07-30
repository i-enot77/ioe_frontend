import { ioeApi } from "./api";

export type SiteItemProp = {
  id: number;
  name: string;
};

export const siteApi = ioeApi.injectEndpoints({
  endpoints: (build) => ({
    getSites: build.query<SiteItemProp[], void>({
      query: () => "sites",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Sites" as const, id })),
              { type: "Sites", id: "LIST" },
            ]
          : [{ type: "Sites", id: "LIST" }],
    }),

    addSiteItem: build.mutation<SiteItemProp, Partial<SiteItemProp>>({
      query(body) {
        return {
          url: "jobs",
          method: "POST",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "Sites", id },
        { type: "Sites", id: "LIST" },
      ],
    }),

    deleteSiteItem: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `sites/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [
        { type: "Sites", id },
        { type: "Sites", id: "LIST" },
      ],
    }),
  }),
});

export const { useGetSitesQuery, useDeleteSiteItemMutation } = siteApi;
