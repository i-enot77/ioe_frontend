import { JobProp } from "@/services/jobsApi";
import JobStatus from "./JobStatus";

export type JobDetailProps = Omit<JobProp, "id" | "deviceName">;

const JobDetailItem = ({
  read,
  status,
  period,
  startDate,
  stopDate,
  type,
}: JobDetailProps) => {
  const formatDateTime = (dateTime: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDateTime = new Date(dateTime).toLocaleDateString(
      undefined,
      options
    );
    return formattedDateTime;
  };
  return (
    <>
      <div>{read}</div>
      <div> {startDate ? formatDateTime(startDate) : "Not provided"}</div>
      <div>{stopDate ? formatDateTime(stopDate) : "Not provided"}</div>
      <JobStatus jobStatus={status} />
      <div>{period}</div>
      <div>{type}</div>
    </>
  );
};

export default JobDetailItem;
