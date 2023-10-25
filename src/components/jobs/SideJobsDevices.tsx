import { useUpdateJobItemMutation } from "../../app/api";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { devPanelToFalse, devPanelToTrue } from "../../app/reducers/sidePanel";
import DeviceModal from "../modals/devices/DeviceModal";
import EditJobForm from "../modals/jobs/EditJobForm";
import Title from "./Title";

function SideJobsDevices() {
  const changePanel = useAppSelector((state) => state.sidePanel.devicePanel);
  const dispatch = useAppDispatch();
  const periodicJobData = useAppSelector((state) => state.jobs.periodicJobData);
  const [updateJobItem] = useUpdateJobItemMutation();

  const updateJob = async (e: React.FormEvent) => {
    e.preventDefault();
    updateJobItem(periodicJobData);
  };
  return (
    <div className="h-full bg-white rounded-lg">
      <div className="flex justify-between  px-6 bg-white rounded-lg">
        <Title
          handleClick={() => {
            dispatch(devPanelToFalse());
          }}
          titleStyle={`${
            !changePanel ? "text-black" : "text-[#808080]"
          } cursor-pointer`}
        >
          Job
        </Title>
        <Title
          handleClick={() => {
            dispatch(devPanelToTrue());
          }}
          titleStyle={`${
            changePanel ? "text-black" : "text-[#808080]"
          } cursor-pointer`}
        >
          Device
        </Title>
      </div>

      <div className="h-full overflow-y-auto no-scrollbar rounded-lg">
        {changePanel ? (
          <DeviceModal isOpen={true} isEdit={true} />
        ) : (
          <EditJobForm submitProp={updateJob} />
        )}
      </div>
    </div>
  );
}

export default SideJobsDevices;
