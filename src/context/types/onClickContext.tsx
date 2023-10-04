export type OnClickContext = {
  // option: string
  // setOption: React.Dispatch<React.SetStateAction<string>>
  // addDevice(): void
  // assignDevice(): void
  // editDevice(): void
  // deviceDelete: () => Promise<void>
  // devicesArr: DevArrProps[]
  // setDevicesArr: React.Dispatch<React.SetStateAction<DevArrProps[]>>
  // modemsArr: ModemsArrProps[]
  // selectedItems: string[]
  // setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
  // initSearchArr: DevArrProps[]
  // setInitSearchArr: React.Dispatch<React.SetStateAction<DevArrProps[]>>
  // deviceData: DevArrProps
  // setDeviceData: React.Dispatch<
  //   React.SetStateAction<
  //     | {
  //         id?: number
  //         serialNumber: string
  //         modem: string
  //         devName: string
  //         type: string
  //         loginInfo: {}
  //         timezone: string
  //         site: string
  //       }
  //     | DevArrProps
  //   >
  // >
  // handleChange: (
  //   e:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>
  // ) => void
  // updateDevice: (e: React.FormEvent) => Promise<void>
  // addDeviceSubmit: (e: React.FormEvent) => Promise<void>
  // deleteDevHandler: (id: number | undefined) => Promise<void>
  //jobs
  // jobsArr: JobProp[]
  // setJobsArr: React.Dispatch<React.SetStateAction<JobProp[]>>
  // addJob: () => void
  // initPeriodicJob: JobProp
  // initJob: JobProp
  // jobReducer: (state: JobProp, action: JobAction) => JobProp
  // editJobClick: () => void
  // deleteJobClick: () => void
  // deleteHandler: (id: number | undefined) => void
  // fetchDevicesModems: () => void
}

export type DevArrProps = {
  id?: number | undefined
  serialNumber: string
  modem: string
  devName: string
  type: string
  loginInfo?: any
  timezone?: string
  site?: string
}

export type ModemsArrProps = {
  id: number
  name: string
  imei: string
  ip: string
  version: string
  config: string
  location: string
  type: string
}

export type JobProp = {
  id: undefined | number
  deviceName: string
  period?: undefined | number
  startDate?: string
  stopDate?: string
  read: undefined | number
  readParams: string | undefined
  status?: any
  [key: string]: any
}

export type JobAction =
  | { type: "UPDATE_FIELD"; field: string; value: string }
  | { type: "UPDATE_NUMBER_FIELD"; field: string; value: number }
  | { type: "RESET" }
  | { type: "SET_STATE"; newState: JobProp }
