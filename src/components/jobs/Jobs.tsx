import { JobItem } from "./JobItem"
import { useLayoutEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchJobs } from "../../app/reducers/jobs"
import Title from "./Title"
import { DetailProp } from "../types"

export interface JobsProp {
  detailPage: boolean
}

export const Jobs = ({ detailPage }: DetailProp) => {
  const dispatch = useAppDispatch()
  const jobsArr = useAppSelector((state) => state.jobs.jobsArr)
  useLayoutEffect(() => {
    dispatch(fetchJobs())
  }, [])

  const style = {
    jobsWrapper: `bg-white h-full w-full rounded-md px-6 pb-5 overflow-y-auto no-scrollbar`,
    jobsArrClass: `w-full grid grid-flow-row grid-cols-5 gap-2`,
    jobsArrDetails: `w-full grid-flow-col grid-rows-1`,
  }

  return (
    <div className={`${style.jobsWrapper}`}>
      {!detailPage && <Title>Recent Jobs</Title>}
      <div
        className={`${!detailPage ? style.jobsArrClass : style.jobsArrDetails}`}
      >
        {jobsArr.map((item, index) => (
          <JobItem
            key={index}
            id={item.id}
            deviceName={item.deviceName}
            status={item.status}
            read={item.read}
            startDate=""
            stopDate={item.stopDate}
            devNameClass="pb-4"
            statusClass="pb-1.5"
            detailPage={detailPage}
          />
        ))}
      </div>
    </div>
  )
}
