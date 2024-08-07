import DeviceModal from "./DeviceModal";
import Devices from "@/features/devices/Devices";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";

const style = {
  item: `w-full p-3 flex justify-between border-b border-[rgba(128, 128, 128, 0.14)] bg-white`,
  inputClass: ` w-full bg-white placeholder:text-text-color placeholder:text-[10px] p-1 ml-1 outline-none `,
};

export type EditProp = {
  isEdit: boolean;
};

const EditDevice = () => {
  const deviceItem = useSelector((state: RootState) => state.device.deviceData);

  return (
    <div className="flex bg-white rounded-md p-8 h-[75vh]">
      <div className="overflow-y-auto h-full w-full">
        <h2 className="title pb-5 sticky top-0 bg-white">Available devices:</h2>
        <Devices isDraggable={false} />
      </div>
      {deviceItem && <DeviceModal isEdit={true} />}
    </div>
  );
};
export default EditDevice;
