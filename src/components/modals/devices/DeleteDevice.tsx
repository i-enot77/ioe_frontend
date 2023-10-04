import { Button } from "../../Button"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { deleteAllDev, deleteDevice } from "../../../app/reducers/devices"

export default function DeleteDevice() {
  const devicesArr = useAppSelector((state) => state.device.devices)
  const dispatch = useAppDispatch()

  return (
    <div className="w-[634px]">
      <p className="title mb-6">Delete Devices</p>
      <div className="bg-white w-full px-10 py-6 rounded-lg">
        <div className="border border-[#E4E6EB] rounded-lg px-6 py-2">
          {devicesArr.map((item, index) => (
            <div
              key={index}
              className="mb-3 last:mb-0 flex justify-between items-center"
            >
              <span className="text-xs">{item.devName}</span>
              <Button
                buttonClass="text-[10px] text-black"
                clickHandler={() => dispatch(deleteDevice(item.id))}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
        <Button
          buttonClass="mt-5 mb-1 w-full border border-[#DC3545] rounded-lg text-xs text-black py-2"
          clickHandler={() => dispatch(deleteAllDev())}
        >
          Delete All
        </Button>
      </div>
    </div>
  )
}
