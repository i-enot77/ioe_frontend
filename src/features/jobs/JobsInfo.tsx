import { JobInfoItem } from "./JobInfoItem";
import { useGetJobsArrQuery } from "../../services/jobsApi";

export const JobsInfo = ({ detailPage }: { detailPage: boolean }) => {
  const { data: jobsArr, isLoading, isError } = useGetJobsArrQuery();

  const style = {
    jobsWrapper: `bg-white w-full rounded-md px-6 py-5`,
    jobsArrClass: ` grid grid-flow-row grid-cols-5 gap-2`,
    jobsArrDetails: ` grid-flow-col grid-rows-1`,
    title: `font-bold text-lg mb-3 sticky top-0 bg-white pt-5 pb-3`,
  };

  return (
    <>
      {jobsArr?.map((item, index) => (
        <JobInfoItem
          key={index}
          id={item.id}
          deviceName={item.deviceName}
          status={item.status}
          read={item.read}
          stopDate={item.stopDate}
          devNameClass="pb-4"
          statusClass="pb-1.5"
          detailPage={detailPage}
        />
      ))}
    </>
  );
};
