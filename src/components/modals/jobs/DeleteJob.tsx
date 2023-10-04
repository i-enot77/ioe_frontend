import { Button } from "../../Button"
import { useDeleteJobItemMutation, useGetJobsArrQuery } from "../../../app/api"
import ModalJobItem from "./ModalJobItem"

export default function DeleteJob() {
  const { data: jobsArr } = useGetJobsArrQuery()

  const [deleteJob] = useDeleteJobItemMutation()

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
              key={index}
              className="grid grid-rows-1 grid-cols-5 justify-items-center items-center p-2 mb-3 last:mb-0 border-b border-b-[#E4E6EB]"
            >
              <ModalJobItem
                id={item.id}
                deviceName={item.deviceName}
                status={item.status}
                read={item.read}
                startDate=""
                stopDate=""
              />
              <Button
                buttonClass="p-3 text-xs cursor-pointer text-black hover:text-[#DC3545] transition-colors"
                clickHandler={() => deleteJob(item.id)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
