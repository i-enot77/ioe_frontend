import { DetailProp } from "../types";
import ReactTimeAgo from "react-time-ago";
import JobSatus from "./JobStatus";

const style = {
  text: `text-xs text-[rgba(7, 7, 7, 0.8)] mr-3`,
  status: `flex justify-between items-center flex-wrap`,
  wrapper: `text-xs  min-w-[21%] bg-white border border-[#E4E6EB] rounded-md p-4`,
};

type JobItemProp = {
  id?: number;
  deviceName?: string;
  read?: number;
  status?: "running" | "waiting" | "failing";
  stopDate: string;
};

export const JobItem = ({
  id,
  deviceName,
  read,
  status,
  stopDate,
  devNameClass,
  statusClass,
  detailPage,
}: JobItemProp & DetailProp) => {
  const getTimeString = (time: string): Date => {
    const parsedTime = new Date(time);
    return parsedTime;
  };

  return !detailPage ? (
    <div className={style.wrapper}>
      <p className="text-base font-bold pb-2">Jobs {id}</p>
      <div className={`${style.text} ${devNameClass}`}>
        Device <span className={style.text}>{deviceName}</span>
      </div>
      <div className={`${style.status} ${statusClass}`}>
        <span className={style.text}>Status </span>
        <JobSatus jobStatus={status} statusClass={style.text} />
      </div>
      <div className="flex justify-between items-center flex-wrap">
        <span className={`${style.text} mr-3`}>
          {read ? "Read" : "Not read"}
        </span>
        <ReactTimeAgo
          className="text-[10px] text-[rgba(7, 7, 7, 0.8)]"
          date={getTimeString(stopDate)}
          locale="en-US"
        />
      </div>
    </div>
  ) : (
    <div className={`${style.wrapper} mb-2 last:mb-0`}>
      <div className="flex justify-between pb-2">
        <p className="text-base font-bold">Jobs {id}</p>
        <div className={`${style.status}`}>
          <JobSatus jobStatus={status} />
        </div>
      </div>

      <div className="flex justify-between">
        <p className={`${style.text}`}>Device {deviceName}</p>
        <ReactTimeAgo
          className="text-[10px] text-[rgba(7, 7, 7, 0.8)]"
          date={getTimeString(stopDate)}
          locale="en-US"
        />
      </div>
    </div>
  );
};
