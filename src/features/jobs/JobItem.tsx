import { JobProp } from "@/services/jobsApi";

const JobItem = ({
  deviceName,
  period,
  startDate,
  stopDate,
  read,
  status,
  type,
}: JobProp) => {
  return (
    <>
      <div>{deviceName}</div>
      <div>{period}</div>
      {/* <div>{startDate}</div>
      <div>{stopDate}</div> */}
      <div>{read}</div>
      <div>{status}</div>
      <div>{type}</div>
    </>
  );
};

export default JobItem;
