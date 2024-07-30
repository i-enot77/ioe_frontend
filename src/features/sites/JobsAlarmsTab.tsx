import Alarms from "../alarms/Alarms";
import { JobsInfo } from "../jobs/JobsInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const JobsAlarmsTab = () => {
  return (
    <div className="w-full h-full">
      <Tabs defaultValue="jobs" className="flex flex-col h-full">
        <TabsList className="grid w-full h-auto grid-cols-2  p-0 bg-[#F3F2EF] sticky top-0">
          <TabsTrigger value="jobs" className="text-xl py-5">
            Recent Jobs
          </TabsTrigger>
          <TabsTrigger value="alarms" className="text-xl py-5">
            Alarms
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="jobs"
          className="bg-white flex-grow grid-flow-col grid-rows-1 rounded-md px-3 py-4  overflow-y-auto"
        >
          <JobsInfo detailPage={true} />
        </TabsContent>
        <TabsContent
          value="alarms"
          className="bg-white flex-grow grid-flow-col grid-rows-1 rounded-md px-3 py-4  overflow-y-auto"
        >
          <Alarms />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobsAlarmsTab;
