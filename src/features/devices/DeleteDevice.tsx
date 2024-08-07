import Devices from "@/features/devices/Devices";
import { useDeleteDevItemMutation } from "@/services/deviceApi";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import Button from "@/components/Button";

export default function DeleteDevice() {
  const deviceItem = useSelector((state: RootState) => state.device.deviceData);
  const [deleteDevItem] = useDeleteDevItemMutation();

  const deleteDevice = () => {
    if (deviceItem) deleteDevItem(deviceItem.id);
  };

  return (
    <div className="bg-white rounded-md p-8 h-[75vh]">
      <div className="overflow-y-auto h-full w-full">
        <div className="sticky top-0 pb-5 bg-white flex justify-between">
          <h2 className="title">Delete Devices:</h2>
          <Button
            className="border border-[#DC3545] rounded-lg  text-black py-2 px-6 mx-3"
            onClick={deleteDevice}
          >
            Delete device
          </Button>
        </div>
        <Devices isDraggable={false} />
      </div>
    </div>
  );
}
