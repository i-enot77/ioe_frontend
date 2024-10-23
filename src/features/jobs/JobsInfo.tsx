import { JobInfoItem } from "./JobInfoItem";
import { useGetJobsArrQuery } from "../../services/jobsApi";

export const JobsInfo = ({ detailPage }: { detailPage: boolean }) => {
  const { data: jobsArr } = useGetJobsArrQuery();

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
