import useCheckKey from "../../hooks/useCheckKey";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { useAppDispatch } from "@/services/hooks";
import { setJobData } from "@/services/slices/jobs";
import JobItem from "./JobItem";
import { useGetJobsArrQuery } from "@/services/jobsApi";

const style = {
  item: `w-full p-3 grid grid-rows-1 grid-cols-7 justify-items-center border-b border-[rgba(128, 128, 128, 0.14)]`,
  inputClass: ` w-full bg-white placeholder:text-text-color placeholder:text-[10px] p-1 ml-1 outline-none `,
};
const headerContent = [
  "Device name",
  "Period",
  "Start date",
  "Stop date",
  "Read",
  "Status",
  "Type",
];

export default function Jobs() {
  // const jobsArr = useSelector((state: RootState) => state.jobs.jobsArr);
  const dispatch = useAppDispatch();
  const { data: jobsArr } = useGetJobsArrQuery();

  //if device klicked/ckicked twice
  const { openValue, checkKey } = useCheckKey();

  return (
    <div className="w-full flex flex-col h-full  bg-white rounded-lg">
      <div className={`${style.item} border-b-0 rounded-lg mb-3`}>
        {headerContent.map((item, index) => (
          <span className="" key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className="w-full">
        {jobsArr &&
          jobsArr?.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                checkKey(item.id);
                dispatch(setJobData(item));
              }}
              className={`${
                openValue !== item.id ? "bg-white" : "bg-[#D9D9D9]"
              } ${style.item}`}
            >
              <JobItem
                id={item.id}
                deviceName={item.deviceName}
                period={item.period}
                startDate={item.startDate}
                stopDate={item.stopDate}
                read={item.read}
                status={item.status}
                type={item.type}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
