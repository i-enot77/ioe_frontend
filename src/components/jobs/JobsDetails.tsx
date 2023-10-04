import { useState } from "react"
import JobDetailItem from "./JobDetailItem"
import useCheckKey from "../../hooks/useCheckKey"
import JobsPanel from "./JobsPanel"
import Pagination from "./Pagination"
import { useGetPaginatedJobsQuery } from "../../app/api"
import SideJobsDevices from "./SideJobsDevices"
import { useAppDispatch } from "../../app/hooks"
import { setPeriodicJobData } from "../../app/reducers/jobs"
import JobDetailsHeader from "./JobDetailsHeader"
import ErrorItem from "../ErrorItem"
import { RotatingLines } from "react-loader-spinner"

function JobsDetails() {
  const [openSidePanel, setOpenSidePanel] = useState(false)

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const {
    data: jobsArr,
    isLoading,
    isError,
    error,
  } = useGetPaginatedJobsQuery({ page, limit })

  const dispatch = useAppDispatch()

  const nextPage = () => {
    setPage((prev) => prev + 1)
  }
  const prevPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : 1))
  }
  const limitPlus = () => setLimit((prev) => prev + 10)
  const limitMinus = () => setLimit((prev) => prev - 10)

  const clikedJob = useCheckKey()

  const style = {
    item: `grid grid-rows-1 grid-cols-6 gap-6 justify-items-start items-start border-b border-b-[rgba(0, 0, 0, 0.18)] py-3 pl-10 w-full`,
  }

  return isError ? (
    <ErrorItem error={error} />
  ) : (
    <div className="h-full w-full">
      <JobsPanel>
        <Pagination
          limit={limit}
          page={page}
          data={jobsArr}
          nextPage={nextPage}
          prevPage={prevPage}
          limitPlus={limitPlus}
          limitMinus={limitMinus}
        />
      </JobsPanel>
      <div
        className={`${
          openSidePanel ? "grid-cols-[3fr_1fr] gap-3" : "grid-cols-1"
        } grid grid-rows-[1fr_14fr] justify-between items-start  h-[95%]`}
      >
        <JobDetailsHeader styleProp={style.item} />

        {isLoading ? (
          <div className="bg-white h-[60%] w-full flex justify-center items-center">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        ) : (
          <div
            className={`${
              openSidePanel ? "col-start-1 col-end-2" : ""
            }  flex justify-between h-[60%] w-full`}
          >
            <div className="h-full w-full overflow-y-auto no-scrollbar">
              {jobsArr?.map((item, index) => (
                <div
                  tabIndex={1}
                  key={index}
                  className={`${style.item} ${
                    clikedJob.openValue !== item.id
                      ? "bg-white"
                      : "bg-[#D9D9D9]/60"
                  }`}
                  onClick={() => {
                    clikedJob.checkKey(item.id)
                    setOpenSidePanel(true)
                    dispatch(setPeriodicJobData(item))
                  }}
                >
                  <JobDetailItem
                    read={item.read}
                    period={item.period}
                    startDate={item.startDate}
                    stopDate={item.stopDate}
                    type={item.type}
                    status={item.status}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {openSidePanel && (
          <div className="h-[60%] w-full">
            <SideJobsDevices />
          </div>
        )}
      </div>
    </div>
  )
}

export default JobsDetails
