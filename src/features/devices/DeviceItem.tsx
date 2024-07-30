import { DevProps } from "@/services/deviceApi";

const style = {
  text: `text-[rgba(0, 0, 0, 0.78)]`,
};

export type DevItemProp = {
  assignModal?: boolean;
};

export default function DeviceItem({
  serialNumber,
  modem,
  devName,
  type,
  timezone,
  site,
  assignModal,
}: DevProps & DevItemProp) {
  const timezoneLabel =
    typeof timezone === "object" && timezone !== null
      ? timezone.label
      : timezone;

  return assignModal ? (
    <>
      <div className={style.text}>{serialNumber}</div>
      <div className={style.text}>{modem}</div>
      <div className={style.text}>{devName}</div>
      <div className={style.text}>{type}</div>
      <div className={style.text}>{timezoneLabel}</div>
      <div className={style.text}>{site}</div>
    </>
  ) : (
    <>
      <div className={style.text}>{serialNumber}</div>
      <div className={style.text}>{modem}</div>
      <div className={style.text}>{devName}</div>
      <div className={style.text}>{type}</div>
    </>
  );
}
