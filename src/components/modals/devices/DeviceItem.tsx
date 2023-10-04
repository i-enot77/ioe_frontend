import { DevArrProps } from "../../../app/reducers/devices"

const style = {
  text: `text-[10px] text-[rgba(0, 0, 0, 0.78)] text-left`,
}

export type DevItemProp = {
  assignModal?: boolean
}

export default function DeviceItem({
  serialNumber,
  modem,
  devName,
  type,
  timezone,
  site,
  assignModal,
}: DevArrProps & DevItemProp) {
  return assignModal ? (
    <>
      <span className={style.text}>{serialNumber}</span>
      <span className={style.text}>{modem}</span>
      <span className={style.text}>{devName}</span>
      <span className={style.text}>{type}</span>
      <span className={style.text}>{timezone}</span>
      <span className={style.text}>{site}</span>
    </>
  ) : (
    <>
      <span className={style.text}>{serialNumber}</span>
      <span className={style.text}>{modem}</span>
      <span className={style.text}>{devName}</span>
      <span className={style.text}>{type}</span>
    </>
  )
}
