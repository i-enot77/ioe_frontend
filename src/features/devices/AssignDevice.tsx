import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import Devices from "./Devices";
import DeviceToModal from "./DeviceToModal";

export default function AssignDevice() {
  const deviceItem = useSelector((state: RootState) => state.device.deviceData);

  return (
    <div className="flex bg-white rounded-md p-8 h-[75vh]">
      <div className="overflow-y-auto h-full w-full">
        <h2 className="title pb-5 sticky top-0 bg-white">Available devices:</h2>

        <Devices isDraggable={false} />
      </div>
      {deviceItem && <DeviceToModal />}
    </div>
  );
}
