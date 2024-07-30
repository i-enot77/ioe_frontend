import DeviceItem from "./DeviceItem";
import useCheckKey from "../../hooks/useCheckKey";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { useAppDispatch } from "@/services/hooks";
import { setDeviceData } from "@/services/slices/devices";
import { useLazyGetDevicesArrQuery } from "@/services/deviceApi";
import { useEffect } from "react";

const style = {
  item: `w-full p-3 grid grid-rows-1 grid-cols-6 justify-items-center border-b border-[rgba(128, 128, 128, 0.14)]`,
};
const headerContent = [
  "Serial number",
  "Modem",
  "Name",
  "Type",
  "Timezone",
  "Site",
];

export default function Devices() {
  const deviceData = useSelector((state: RootState) => state.device.deviceData);
  const dispatch = useAppDispatch();
  const [fetchDevices, { data: devicesArr }] = useLazyGetDevicesArrQuery();

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  //if device klicked/ckicked twice
  const { openValue, checkKey } = useCheckKey();

  return (
    <div className="w-full">
      <div className={`${style.item} border-b-0 mb-3`}>
        {headerContent.map((item, index) => (
          <span className="" key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className="w-full  text-[rgba(0, 0, 0, 0.78)]">
        {devicesArr?.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              checkKey(item.id);
              dispatch(setDeviceData(item));
              console.log(deviceData);
            }}
            className={`${
              openValue !== item.id ? "bg-white" : "bg-[#D9D9D9]"
            } ${style.item}`}
          >
            <DeviceItem
              id={item.id}
              serialNumber={item.serialNumber}
              modem={item.modem}
              devName={item.devName}
              type={item.type}
              timezone={item.timezone}
              site={item.site}
              assignModal={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
