import ReactTimeAgo from "react-time-ago";
import { DetailProp } from "../../components/types";
import JobStatus from "./JobStatus";
import { JobProp } from "@/services/jobsApi";

const style = {
  text: `text-xs text-[rgba(7, 7, 7, 0.8)] mr-3`,
  status: `flex justify-between items-center flex-wrap`,
  wrapper: `text-xs  min-w-[21%] bg-white border border-[#E4E6EB] rounded-md p-4`,
};

export type JobInfoProp = Omit<JobProp, "period" | "startDate" | "type">;

export const JobInfoItem = ({
  id,
  deviceName,
  read,
  status,
  stopDate,
  detailPage,
}: JobInfoProp & DetailProp) => {
  const getTimeString = (time: string | Date): Date => {
    if (typeof time === "string") {
      const parsedTime = new Date(time);
      return parsedTime;
    } else return time;
  };

  return !detailPage ? (
    <div className={style.wrapper}>
      <h2 className="text-base font-bold pb-2">Jobs {id}</h2>
      <div className={`${style.text} pb-4`}>
        Device <span className={style.text}>{deviceName}</span>
      </div>
      <div className={`${style.status} pb-1.5`}>
        <span className={style.text}>Status </span>
        <JobStatus jobStatus={status} statusClass={style.text} />
      </div>
      <div className="flex justify-between items-center flex-wrap">
        <span className={`${style.text} mr-3`}>
          {read ? "Read" : "Not read"}
        </span>
        {stopDate && (
          <ReactTimeAgo
            className="text-[10px] text-[rgba(7, 7, 7, 0.8)]"
            date={getTimeString(stopDate)}
            locale="en-US"
          />
        )}
      </div>
    </div>
  ) : (
    <div className={`${style.wrapper} mb-2 last:mb-0`}>
      <div className="flex justify-between pb-2">
        <p className="text-base font-bold">Jobs {id}</p>
        <div className={`${style.status}`}>
          <JobStatus jobStatus={status} />
        </div>
      </div>

      <div className="flex justify-between">
        <p className={`${style.text}`}>Device {deviceName}</p>
        {stopDate && (
          <ReactTimeAgo
            className="text-[10px] text-[rgba(7, 7, 7, 0.8)]"
            date={getTimeString(stopDate)}
            locale="en-US"
          />
        )}
      </div>
    </div>
  );
};
