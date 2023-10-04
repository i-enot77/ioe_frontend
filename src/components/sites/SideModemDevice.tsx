import Title from "../jobs/Title"
import DeviceModal from "../modals/devices/DeviceModal"
import EditModem from "../../modems/EditModem"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { devPanelToFalse, devPanelToTrue } from "../../app/reducers/sidePanel"

function SideModemDevice() {
  const changePanel = useAppSelector((state) => state.sidePanel.devicePanel)
  const dispatch = useAppDispatch()
  return (
    <>
      <div className="flex justify-between">
        <Title
          handleClick={() => {
            dispatch(devPanelToTrue())
          }}
          titleStyle={`${
            changePanel ? "text-black" : "text-[#808080]"
          } cursor-pointer`}
        >
          Modem
        </Title>
        <Title
          handleClick={() => {
            dispatch(devPanelToFalse())
          }}
          titleStyle={`${
            !changePanel ? "text-black" : "text-[#808080]"
          } cursor-pointer`}
        >
          Device
        </Title>
      </div>
      <div className="h-[85%] overflow-y-auto no-scrollbar">
        {changePanel ? (
          <EditModem />
        ) : (
          <DeviceModal
            isOpen={true}
            isEdit={true}
            wrapperStyle="w-full h-[60%] bg-white"
          />
        )}
      </div>
    </>
  )
}

export default SideModemDevice
