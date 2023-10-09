import DeviceHeader from "./DeviceHeader"
import DeviceItem from "./DeviceItem"
import DeviceModal from "./DeviceModal"
import { setDeviceData } from "../../../app/reducers/devices"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"

const style = {
  item: `w-full p-3 flex justify-between border-b border-[rgba(128, 128, 128, 0.14)] bg-white`,
  inputClass: ` w-full bg-white placeholder:text-text-color placeholder:text-[10px] p-1 ml-1 outline-none `,
}

export type EditProp = {
  isEdit: boolean
}

const headerContent = [
  { title: "Serial number", headerClassName: "w-[16%]" },
  { title: "Modem", headerClassName: "w-[10%]" },
  { title: "Name", headerClassName: "w-[10%]" },
  { title: "Type", headerClassName: "w-[10%]" },
]

export default function EditDeviceModal({ isEdit }: EditProp) {
  const dispatch = useAppDispatch()
  const devicesArr = useAppSelector((state) => state.device.devices)

  return (
    <div className="w-[1000px]">
      <p className="title mb-5">Available devices</p>
      <div className="flex">
        <div className="w-[55%] mr-2">
          <div className={`${style.item} border-b-0 rounded-lg mb-3`}>
            {headerContent.map((item, index) => (
              <DeviceHeader key={index} title={item.title} />
            ))}
          </div>
          {devicesArr.map((item, index) => (
            <div
              key={index}
              className={`${style.item}  first:rounded-t-lg last:rounded-b-lg`}
              onClick={() => dispatch(setDeviceData(item))}
            >
              <DeviceItem
                serialNumber={item.serialNumber}
                modem={item.modem}
                devName={item.devName}
                type={item.type}
                timezone={item.timezone}
                site={item.site}
                assignModal={false}
              />
            </div>
          ))}
        </div>
        <DeviceModal isOpen={true} isEdit={isEdit} wrapperStyle="w-[45%]" />
      </div>
    </div>
  )
}
