import Alarms from "../alarms/Alarms";
import { Jobs } from "./Jobs";
import { useState } from "react";
import Title from "./Title";

function SideJobsAlarms() {
  const [isOpen, setIsOpen] = useState(true);
  const style = {
    detailStyle: `w-full`,
  };

  return (
    <div className="h-[75%] bg-white rounded-md">
      <div className="flex justify-between  px-6 bg-white">
        <Title
          handleClick={() => {
            setIsOpen(true);
          }}
          titleStyle={`${
            isOpen ? "text-black" : "text-[#808080]"
          } cursor-pointer`}
        >
          Recent Jobs
        </Title>
        <Title
          handleClick={() => {
            setIsOpen(false);
          }}
          titleStyle={`${
            !isOpen ? "text-black" : "text-[#808080]"
          } cursor-pointer`}
        >
          Alarms
        </Title>
      </div>
      <div className="h-full overflow-y-auto no-scrollbar">
        {isOpen ? (
          <Jobs detailPage={true} />
        ) : (
          <Alarms detailPage={true} detailStyle={style.detailStyle} />
        )}
      </div>
    </div>
  );
}

export default SideJobsAlarms;
