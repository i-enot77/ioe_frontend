import { useUpdateJobItemMutation } from "../../app/api"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { devPanelToFalse, devPanelToTrue } from "../../app/reducers/sidePanel"
import DeviceModal from "../modals/devices/DeviceModal"
import EditJobForm from "../modals/jobs/EditJobForm"
import Title from "./Title"

function SideJobsDevices() {
  const changePanel = useAppSelector((state) => state.sidePanel.devicePanel)
  const dispatch = useAppDispatch()
  const periodicJobData = useAppSelector((state) => state.jobs.periodicJobData)
  const [updateJobItem] = useUpdateJobItemMutation()

  const updateJob = async (e: React.FormEvent) => {
    e.preventDefault()
    updateJobItem(periodicJobData)
    console.log(periodicJobData)
  }
  return (
    <div className="h-full  bg-white overflow-y-auto no-scrollbar rounded-md">
      <div className="flex justify-between  px-6 sticky top-0 bg-white">
        <Title
          handleClick={() => {
            dispatch(devPanelToFalse())
          }}
          titleStyle={`${
            !changePanel ? "text-black" : "text-[#808080]"
          } cursor-pointer`}
        >
          Job
        </Title>
        <Title
          handleClick={() => {
            dispatch(devPanelToTrue())
          }}
          titleStyle={`${
            changePanel ? "text-black" : "text-[#808080]"
          } cursor-pointer`}
        >
          Device
        </Title>
      </div>

      <div className="h-full">
        {changePanel ? (
          <DeviceModal
            isOpen={true}
            isEdit={true}
            wrapperStyle="w-full h-[85%] bg-white"
          />
        ) : (
          <div className="w-full h-full">
            <EditJobForm submitProp={updateJob} />
          </div>
        )}
      </div>
    </div>
  )
}

export default SideJobsDevices
