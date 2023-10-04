import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { setPeriodicJobData } from "../../../app/reducers/jobs"
import { useGetJobsArrQuery, useUpdateJobItemMutation } from "../../../app/api"
import ModalJobItem from "./ModalJobItem"
import EditJobForm from "./EditJobForm"

export default function EditJob() {
  const dispatch = useAppDispatch()
  const periodicJobData = useAppSelector((state) => state.jobs.periodicJobData)
  const [updateJobItem] = useUpdateJobItemMutation()
  const { data: jobsArr } = useGetJobsArrQuery()

  const updateJob = async (e: React.FormEvent) => {
    e.preventDefault()
    updateJobItem(periodicJobData)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-[80%] bg-white rounded-lg p-6 mr-4 grid grid-flow-row grid-cols-1 gap-2">
        <div className="grid grid-rows-1 grid-cols-4 border-b border-b-[#E4E6EB] pb-2">
          <span>Job ID</span>
          <span>Device</span>
          <span>Status</span>
          <span>Read</span>
        </div>
        <div className="overflow-y-auto no-scrollbar h-full">
          {jobsArr?.map((item, index) => (
            <div
              tabIndex={1}
              key={index}
              className="grid grid-rows-1 grid-cols-4 p-2 mb-3 last:mb-0 border-b border-b-[#E4E6EB] cursor-pointer"
              onClick={() => dispatch(setPeriodicJobData(item))}
            >
              <ModalJobItem
                id={item.id}
                deviceName={item.deviceName}
                status={item.status}
                read={item.read}
                startDate=""
                stopDate=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-[80%]">
        <EditJobForm submitProp={updateJob} />
      </div>
    </div>
  )
}
