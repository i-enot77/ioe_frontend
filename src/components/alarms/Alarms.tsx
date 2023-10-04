import useFetchData from "../../hooks/useFetchData"
import Title from "../jobs/Title"
import { DetailProp } from "../types"
import { AlarmItem } from "./AlarmItem"
import ReactTimeAgo from "react-time-ago"

const style = {
  main: `w-[30%] rounded-md px-6 pb-5 overflow-y-auto no-scrollbar bg-white  mr-3`,
  item: `flex flex-wrap justify-between items-center border border-[#E4E6EB] p-2 mb-2 last:mb-0 rounded-md`,
}

export default function Alarms({ detailPage, detailStyle }: DetailProp) {
  const alarmsData = useFetchData("http://localhost:3500/alarms")

  const getTimeString = (time: string): Date => {
    const parsedTime = new Date(time)
    return parsedTime
  }

  return (
    <div className={`${style.main} ${detailStyle}`}>
      {!detailPage && <Title>Alarms</Title>}
      <div>
        {alarmsData.dataArr.map((item, index) => (
          <div key={index} className={style.item}>
            <AlarmItem
              deviceName={item.deviceName}
              job={item.job}
              status={item.status}
            >
              <ReactTimeAgo
                className="text-[10px] text-[rgba(7, 7, 7, 0.8)]"
                date={getTimeString(item.time)}
                locale="en-US"
              />
            </AlarmItem>
          </div>
        ))}
      </div>
    </div>
  )
}
