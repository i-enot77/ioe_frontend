import { ioeApi } from "./api";

export type ModemsProps = {
  id: string;
  modemName: string;
  imei: string;
  ip: string;
  version: string;
  config: {
    config: string;
  } | null;
  location: string;
  type: string;
  // [key: string]: unknown;
};

export const modemApi = ioeApi.injectEndpoints({
  endpoints: (build) => ({
    getModems: build.query<ModemsProps[], void>({
      query: () => "modems",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Modems" as const, id })),
              { type: "Modems", id: "LIST" },
            ]
          : [{ type: "Modems", id: "LIST" }],
    }),

    updateModemItem: build.mutation<ModemsProps, Partial<ModemsProps>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `modems/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "Modems", id },
        { type: "Modems", id: "LIST" },
      ],
    }),
  }),
});

export const { useLazyGetModemsQuery, useUpdateModemItemMutation } = modemApi;
