export type AlarmItemProp = {
  deviceName: string
  job: string
  time?: any
  status: "available" | "incident" | "waiting"
}
