import { JobProp } from "../../../app/reducers/jobs"

function ModalJobItem({ id, deviceName, status, read }: JobProp) {
  return (
    <>
      <div>Job {id}</div>
      <div>Device {deviceName}</div>
      <div>{status}</div>
      <div>read {read}</div>
    </>
  )
}

export default ModalJobItem
