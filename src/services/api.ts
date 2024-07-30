import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ioeApi = createApi({
  reducerPath: "ioeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL,
  }),
  tagTypes: ["Jobs", "Modems", "Devices", "Sites", "Alarms"],
  endpoints: () => ({}),
});
