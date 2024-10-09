import DeviceItem from "./DeviceItem";
import useCheckKey from "../../hooks/useCheckKey";
import { useAppDispatch } from "@/services/hooks";
import { setDevArr, setDeviceData } from "@/services/slices/devices";
import { useLazyGetDevicesArrQuery } from "@/services/deviceApi";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";

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

const Devices = ({ isDraggable }: { isDraggable: boolean }) => {
  const dispatch = useAppDispatch();
  const [fetchDevices, { data: devicesArr }] = useLazyGetDevicesArrQuery();

  const availableDevices = useSelector(
    (state: RootState) => state.device.devices
  );

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  useEffect(() => {
    if (isDraggable && devicesArr) {
      dispatch(setDevArr(devicesArr));
    }
  }, [devicesArr]);

  const devicesToDisplay = isDraggable ? availableDevices : devicesArr;

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
        {devicesToDisplay &&
          devicesToDisplay?.map((item) => (
            <DeviceItem
              key={item.id}
              onClick={() => {
                checkKey(item.id);
                dispatch(setDeviceData(item));
              }}
              isDraggable={isDraggable}
              className={`${
                openValue !== item.id ? "bg-white" : "bg-[#D9D9D9]"
              } ${style.item}`}
              device={item}
            />
          ))}
      </div>
    </div>
  );
};
export default Devices;
