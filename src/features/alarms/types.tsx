export type AlarmItemProp = {
  deviceName: string;
  job: string;
  time: Date;
  status: "available" | "incident" | "waiting";
};
