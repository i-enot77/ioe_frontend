import { AlarmItemProp } from "./types"
import { ChildrenProp } from "../types"

const style = {
  statusItem: `text-xs flex flex-col ml-2`,
}

export const AlarmItem = ({
  deviceName,
  job,
  status,
  children,
}: AlarmItemProp & ChildrenProp) => {
  let setStatus

  if (status === "available") {
    setStatus = (
      <div className={style.statusItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            fill="#00c738"
          />
        </svg>
        <span className="text-[#00C738] mt-1.5">Available</span>
      </div>
    )
  } else if (status === "incident") {
    setStatus = (
      <div className={style.statusItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 512 512"
        >
          <path
            d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
            fill="#ffc107"
          />
        </svg>
        <span className="text-[#FFC107] mt-1">Incident</span>
      </div>
    )
  } else if (status === "waiting") {
    setStatus = (
      <div className={style.statusItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 512 512"
        >
          <path
            d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
            fill="#000000"
          />
        </svg>
        <span className="text-black mt-1">Waiting</span>
      </div>
    )
  }

  return (
    <>
      <div>
        <span className="text-[15px] text-black">Device {deviceName}</span>
        <div className="mt-1 text-[10px] text-[rgba(7, 7, 7, 0.8)]">
          {job} {children}
        </div>
      </div>
      <span>{setStatus}</span>
    </>
  )
}
