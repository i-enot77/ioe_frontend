import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { Button } from "../Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { addJobOption } from "../../app/reducers/option"
import { ChildrenProp } from "../types"

function JobsPanel({ children }: ChildrenProp) {
  const jobsArr = useAppSelector((state) => state.jobs.jobsArr)
  const dispatch = useAppDispatch()

  return (
    <div className="w-full mb-4">
      <div className="w-full flex justify-between items-center my-2">
        <p className="font-bold text-black text-2xl">Available Jobs</p>
        <Button
          buttonClass="font-bold text-black text-xl bg-[#87C4E7] p-3 rounded"
          clickHandler={() => dispatch(addJobOption())}
        >
          <FontAwesomeIcon
            icon={faCirclePlus}
            size="sm"
            style={{ color: "#000000" }}
            className="mr-2"
          />
          New Job
        </Button>
      </div>
      <div className="w-[70%] flex justify-between items-center">
        {children}

        <div className="text-black font-bold text-base">
          {jobsArr.length} total jobs
        </div>
      </div>
    </div>
  )
}

export default JobsPanel
