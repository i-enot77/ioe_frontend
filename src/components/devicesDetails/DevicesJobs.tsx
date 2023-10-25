import { RotatingLines } from "react-loader-spinner";
import { useGetJobsArrQuery } from "../../app/api";
import { JobItem } from "../jobs/JobItem";

function DevicesJobs() {
  const { data: jobsArr, isSuccess } = useGetJobsArrQuery();
  return (
    <div className="grid grid-cols-2 grid-flow-row gap-4 bg-white p-3 rounded-lg mt-4 h-[16%] overflow-y-auto no-scrollbar">
      {isSuccess ? (
        jobsArr.map((item) => (
          <JobItem
            key={item.id}
            id={item.id}
            deviceName={item.deviceName}
            read={item.read}
            status={item.status}
            stopDate={item.stopDate}
            detailPage={false}
          />
        ))
      ) : (
        <RotatingLines />
      )}
    </div>
  );
}

export default DevicesJobs;
