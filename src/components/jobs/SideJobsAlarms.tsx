import Alarms from "../alarms/Alarms"
import { Jobs } from "./Jobs"
import { useState } from "react"
import Title from "./Title"

function SideJobsAlarms() {
  const [isOpen, setIsOpen] = useState(true)
  const style = {
    detailStyle: `w-full`,
  }

  return (
    <div className="h-full">
      <div className="flex justify-between">
        <Title
          handleClick={() => {
            setIsOpen(true)
          }}
          titleStyle={`${
            isOpen ? "text-black" : "text-[#808080]"
          } cursor-pointer`}
        >
          Recent Jobs
        </Title>
        <Title
          handleClick={() => {
            setIsOpen(false)
          }}
          titleStyle={`${
            !isOpen ? "text-black" : "text-[#808080]"
          } cursor-pointer`}
        >
          Alarms
        </Title>
      </div>
      <div className="h-[85%]">
        {isOpen ? (
          <Jobs detailPage={true} />
        ) : (
          <Alarms detailPage={true} detailStyle={style.detailStyle} />
        )}
      </div>
    </div>
  )
}

export default SideJobsAlarms
