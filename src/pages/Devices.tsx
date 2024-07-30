// import SidePanelSkeleton from "../SidePanelSkeleton";
// import DevicesJobs from "../components/devicesDetails/DevicesJobs";
// import Tabs from "../components/devicesDetails/Tabs";
// import ModemDeviceTab from "../features/sites/ModemDeviceTab";
// import { useAppSelector } from "../app/hooks";
// import PageHeader from "../components/PageHeader";

// function Devices() {
//   const changeSidePanel = useAppSelector(
//     (state) => state.sidePanel.panelChange
//   );
//   const devArr = useAppSelector((state) => state.device.devices);
//   return (
//     <section className="max-w-[1468px] px-3.5 h-screen mt-3 mx-auto grid grid-rows-[minmax(100px,_0.5fr)_4fr] grid-cols-[4fr_2fr] gap-3 overflow-hidden">
//       <div className="col-span-2 h-full">
//         <PageHeader
//           title="All Devices"
//           arrLength={devArr.length}
//           item="device"
//           wrapperClass="h-full"
//           clickHandler={() => console.log("device added")}
//         />
//       </div>
//       <div className="row-start-2 col-start-1 grid grid-cols-1 grid-rows-[1fr_5fr] ">
//         <Tabs />
//         <DevicesJobs />
//       </div>
//       {changeSidePanel ? (
//         <SidePanelSkeleton />
//       ) : (
//         <ModemDeviceTab sideWrapperClass="h-[20%]" />
//       )}
//     </section>
//   );
// }

// export default Devices;
