import { useState } from "react";
import useCheckKey from "../../hooks/useCheckKey";
import { useGetPaginatedJobsQuery } from "../../services/jobsApi";
import { useAppDispatch } from "../../services/hooks";
import { RotatingLines } from "react-loader-spinner";
import ErrorItem from "@/components/ErrorItem";
import JobDetailItem from "./JobDetailItem";
import { setJobData } from "@/services/slices/jobs";
import { jobTitles } from "../config/jobs";
import JobsPanel from "@/features/jobs/JobsPanel";
import Pagination from "@/features/jobs/Pagination";
import { editJobOption } from "@/services/slices/option";

const JobsDetails = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const {
    data: jobsArr,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetPaginatedJobsQuery({ page, limit });

  const dispatch = useAppDispatch();
  const clikedJob = useCheckKey();

  const style = {
    item: `grid grid-rows-1 grid-cols-6 gap-6 justify-items-start items-start border-b border-b-[rgba(0, 0, 0, 0.18)] py-3 pl-10 w-full`,
  };

  return (
    <>
      {isFetching && (
        <div className="bg-white h-[60%] w-full flex justify-center items-center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      )}

      {isSuccess && jobsArr ? (
        <div className="h-full w-full flex flex-col">
          <JobsPanel />

          <div className="w-full h-full flex-grow mb-4 bg-white rounded-md">
            <div className={style.item}>
              {jobTitles.map((title, index) => (
                <span key={index} className="font-medium">
                  {title}
                </span>
              ))}
            </div>

            <div className="h-[93%] w-full overflow-y-auto flex flex-col pb-3">
              {jobsArr.map((item) => (
                <div
                  key={item.id}
                  className={`flex-grow ${style.item} ${
                    clikedJob.openValue !== item.id
                      ? "bg-white"
                      : "bg-[#D9D9D9]/60"
                  }`}
                  onClick={() => {
                    clikedJob.checkKey(item.id);
                    dispatch(editJobOption());
                    dispatch(setJobData(item));
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

          <Pagination
            limit={limit}
            page={page}
            totalItems={jobsArr.length}
            setPage={setPage}
            setLimit={setLimit}
          />
        </div>
      ) : (
        <ErrorItem error={error} />
      )}
    </>
  );
};

export default JobsDetails;
