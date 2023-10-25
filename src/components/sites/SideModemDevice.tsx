import Title from "../jobs/Title";
import DeviceModal from "../modals/devices/DeviceModal";
import EditModem from "../../modems/EditModem";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { devPanelToFalse, devPanelToTrue } from "../../app/reducers/sidePanel";

type SideWrapperClassProp = {
  sideWrapperClass?: string;
};

function SideModemDevice({ sideWrapperClass }: SideWrapperClassProp) {
  const changePanel = useAppSelector((state) => state.sidePanel.devicePanel);
  const dispatch = useAppDispatch();
  return (
    <div className={`bg-white rounded-lg ${sideWrapperClass}`}>
      <div className="flex justify-between px-6">
        <Title
          handleClick={() => {
            dispatch(devPanelToTrue());
          }}
          titleStyle={`${
            changePanel ? "text-black" : "text-[#808080]"
          } cursor-pointer`}
        >
          Modem
        </Title>
        <Title
          handleClick={() => {
            dispatch(devPanelToFalse());
          }}
          titleStyle={`${
            !changePanel ? "text-black" : "text-[#808080]"
          } cursor-pointer`}
        >
          Device
        </Title>
      </div>
      <div className="h-full overflow-y-auto no-scrollbar">
        {changePanel ? (
          <EditModem />
        ) : (
          <DeviceModal isOpen={true} isEdit={true} />
        )}
      </div>
    </div>
  );
}

export default SideModemDevice;
