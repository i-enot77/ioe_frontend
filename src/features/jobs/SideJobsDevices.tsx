import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DeviceModal from "../devices/DeviceModal";
import JobModal from "./JobModal";

const SideJobsDevices = () => {
  return (
    <div className="w-full h-full">
      <Tabs defaultValue="job" className="flex flex-col h-full">
        <TabsList className="grid w-full h-auto grid-cols-2  p-0 bg-[#F3F2EF] sticky top-0">
          <TabsTrigger value="job" className="text-xl py-5">
            Job
          </TabsTrigger>
          <TabsTrigger value="device" className="text-xl py-5">
            Device
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="job"
          className="bg-white flex-grow grid-flow-col grid-rows-1 rounded-md px-3 py-4  overflow-y-auto"
        >
          <JobModal isEdit={true} />
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
};

export default SideJobsDevices;
