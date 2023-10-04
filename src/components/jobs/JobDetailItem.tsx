import { JobProp } from "../../app/reducers/jobs"
import JobStatus from "./JobStatus"

function JobDetailItem({
  read,
  status,
  period,
  startDate,
  stopDate,
  type,
}: JobProp) {
  const formatDateTime = (dateTimeString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }
    const formattedDateTime = new Date(dateTimeString).toLocaleDateString(
      undefined,
      options
    )
    return formattedDateTime
  }
  return (
    <>
      <div>{read}</div>
      <div> {formatDateTime(startDate)}</div>
      <div>{formatDateTime(stopDate)}</div>
      <JobStatus jobStatus={status} />
      <div>{period}</div>
      <div>{type}</div>
    </>
  )
}

export default JobDetailItem
