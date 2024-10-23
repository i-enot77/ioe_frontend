import DeviceModal from "../devices/DeviceModal";
import EditModem from "../modems/EditModem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { useAppDispatch } from "@/services/hooks";
import { changeTab } from "@/services/slices/tabs";

function ModemDeviceTab() {
  const tab = useSelector((state: RootState) => state.tabs.isDeviceTab);
  const dispatch = useAppDispatch();

  const handleTabChange = (value: string) => {
    dispatch(changeTab(value));
  };

  return (
    <div className="w-full h-full">
      <Tabs
        value={tab}
        onValueChange={handleTabChange}
        className="flex flex-col h-full"
      >
        <TabsList className="grid w-full h-auto grid-cols-2  p-0 bg-[#F3F2EF] sticky top-0">
          <TabsTrigger value="modem" className="text-xl py-5">
            Modem
          </TabsTrigger>
          <TabsTrigger value="device" className="text-xl py-5">
            Device
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="modem"
          className="bg-white flex-grow grid-flow-col grid-rows-1 rounded-md px-3 py-4  overflow-y-auto"
        >
          <EditModem />
        </TabsContent>
        <TabsContent
          value="device"
          className="bg-white flex-grow grid-flow-col grid-rows-1 rounded-md px-3 py-4  overflow-y-auto"
        >
          <DeviceModal isEdit={true} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ModemDeviceTab;
