import SidePanelSkeleton from "../SidePanelSkeleton";
import DevicesJobs from "../components/devicesDetails/DevicesJobs";
import Tabs from "../components/devicesDetails/Tabs";
import SideModemDevice from "../components/sites/SideModemDevice";
import { useAppSelector } from "../app/hooks";

function Devices() {
  const changeSidePanel = useAppSelector(
    (state) => state.sidePanel.panelChange
  );
  return (
    <section className="max-w-[1468px] px-3.5 h-screen mt-3 mx-auto grid grid-rows-[minmax(100px,_0.5fr)_4fr] grid-cols-[4fr_2fr] gap-3 overflow-hidden">
      <div className="col-span-2">jhuiytrfyguhki</div>
      <div className="row-start-2 col-start-1 grid grid-cols-1 grid-rows-[1fr_5fr] ">
        <Tabs />
        <DevicesJobs />
      </div>
      {changeSidePanel ? (
        <SidePanelSkeleton />
      ) : (
        <SideModemDevice sideWrapperClass="h-[20%]" />
      )}
    </section>
  );
}

export default Devices;
