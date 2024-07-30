import { ioeApi } from "./api";

export type AlarmItemProp = {
  id: string;
  deviceName: string;
  job: string;
  time: string;
  status: "available" | "incident" | "waiting";
};

export const alarmApi = ioeApi.injectEndpoints({
  endpoints: (build) => ({
    getAlarms: build.query<AlarmItemProp[], void>({
      query: () => "alarms",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Alarms" as const, id })),
              { type: "Alarms", id: "LIST" },
            ]
          : [{ type: "Alarms", id: "LIST" }],
    }),
  }),
});
export const { useGetAlarmsQuery } = alarmApi;
