import { ITimezone } from "react-timezone-select";
import { ioeApi } from "./api";

export type DevProps = {
  id: string;
  serialNumber: string;
  modem: string;
  devName: string;
  type: string;
  loginInfo?: {
    loginInfo: string;
  } | null;
  timezone: ITimezone | string;
  site?: string;
};

export const modemApi = ioeApi.injectEndpoints({
  endpoints: (build) => ({
    getDevicesArr: build.query<DevProps[], void>({
      query: () => "devices",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Devices" as const, id })),
              { type: "Devices", id: "LIST" },
            ]
          : [{ type: "Devices", id: "LIST" }],
    }),

    getDevItem: build.query<DevProps, number>({
      query: (id) => `devices/${id}`,
      providesTags: (result, error, id) => [{ type: "Devices", id }],
    }),

    addDevItem: build.mutation<DevProps, Partial<DevProps>>({
      query(body) {
        return {
          url: "devices",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Devices", id: "LIST" }],
    }),
    updateDevItem: build.mutation<DevProps, Partial<DevProps>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `devices/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "Devices", id },
        { type: "Devices", id: "LIST" },
      ],
    }),

    assignDevToModem: build.mutation<DevProps, Partial<DevProps>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `devices/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "Devices", id },
        { type: "Devices", id: "LIST" },
      ],
    }),

    deleteDevItem: build.mutation<{ success: boolean; id: string }, string>({
      query(id) {
        return {
          url: `devices/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Devices", id }],
    }),

    deleteAllDevies: build.mutation<{ success: boolean }, number>({
      query() {
        return {
          url: "devices",
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [
        { type: "Devices", id },
        { type: "Devices", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useLazyGetDevicesArrQuery,
  useLazyGetDevItemQuery,
  useAddDevItemMutation,
  useUpdateDevItemMutation,
  useDeleteDevItemMutation,
  useDeleteAllDeviesMutation,
} = modemApi;
