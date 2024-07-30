import { DevPropsWithoutId } from "@/services/slices/devices";
import { JobPropWithoutID } from "@/services/slices/jobs";
import { ModemWithoutID } from "@/services/slices/modems";
import { object, string, ObjectSchema, number, date } from "yup";

export const deviceSchema: ObjectSchema<DevPropsWithoutId> = object({
  serialNumber: string().required("Required"),
  modem: string().required("Required"),
  devName: string().required("Required"),
  type: string().required("Required"),
  loginInfo: object({
    loginInfo: string().required("Required"),
  }).nullable(),
  timezone: string().required("Required"),
  site: string().required("Required"),
});

export const jobSchema: ObjectSchema<JobPropWithoutID> = object({
  deviceName: string().required("Required"),
  period: number().required("Required"),
  startDate: date().required("Required"),
  stopDate: date().required("Required"),
  read: number().required("Required"),
  readParams: object({
    params: string().required("Required"),
  }).nullable(),
  status: string().required("Required"),
  type: string().required("Required"),
});

export const modemSchema: ObjectSchema<ModemWithoutID> = object({
  modemName: string().required("Required"),
  imei: string().required("Required"),
  ip: string().required("Required"),
  version: string().required("Required"),
  config: object({
    config: string().required("Required"),
  }).required("Required"),
  location: string().required("Required"),
  type: string().required("Required"),
});
