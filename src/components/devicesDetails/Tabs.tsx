// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import TabItem from "./TabItem";
// import TabContent from "./TabContent";
// import { useEffect, useState } from "react";
// import {
//   useGetDevicesQuery,
//   useGetModemsQuery,
//   useGetSitesQuery,
// } from "../../app/jobsApi";
// import { SiteItemProp } from "../../features/sites/siteTypes";
// import { setSiteItemId } from "../../app/slices/sites";
// import { ModemsArrProps } from "../../app/slices/modems";
// import { setDevices } from "../../app/slices/devices";
// import { RotatingLines } from "react-loader-spinner";
// import useCheckKey from "../../hooks/useCheckKey";

// export default function Tabs() {
//   const [filteredSites, setFilteredSites] = useState<SiteItemProp[]>([]);
//   const [filteredModems, setFilteredModems] = useState<ModemsArrProps[]>([]);
//   const [isModemData, setIsModemData] = useState(false);

//   const [modemsPerSite, setModemsPerSite] = useState<ModemsArrProps[]>([]);

//   const dispatch = useAppDispatch();
//   const siteItemId = useAppSelector((state) => state.sites.siteItemId);

//   const { data: sitesArr, isSuccess: sitesSucces } = useGetSitesQuery();
//   const { data: modemsArr, isSuccess: modemsSucces } = useGetModemsQuery();
//   const { data: devicesArr, isSuccess: devicesSucces } = useGetDevicesQuery();

//   const allDataSuccesfull = sitesSucces && modemsSucces && devicesSucces;

//   const activeItem = useCheckKey();

//   useEffect(() => {
//     if (sitesSucces && modemsSucces && devicesSucces) {
//       dispatch(setDevices(devicesArr));
//       const filteredModemsData = modemsArr.filter((modem) => {
//         return devicesArr.some((device) => device.modemId === modem.id);
//       });
//       setFilteredModems(filteredModemsData);

//       const filteredSitesData = sitesArr.filter((site) => {
//         return filteredModemsData.some((modem) => modem.siteId === site.id);
//       });
//       setFilteredSites(filteredSitesData);

//       if (filteredSitesData.length > 0) {
//         dispatch(setSiteItemId(filteredSitesData[0].id));
//         activeItem.setOpenValue(filteredSitesData[0].id);
//         setIsModemData(true);
//       }
//     }
//   }, [allDataSuccesfull]);

//   useEffect(() => {
//     if (isModemData) {
//       const modemsPerSite = filteredModems.filter(
//         (modem) => modem.siteId === siteItemId
//       );
//       setModemsPerSite(modemsPerSite);
//     }
//   }, [siteItemId, isModemData]);

//   return (
//     <div className="bg-white rounded-lg px-5 py-8 h-[100%] overflow-y-auto no-scrollbar">
//       {allDataSuccesfull ? (
//         <>
//           <ul className="flex items-center mb-7">
//             {filteredSites.map((item) => (
//               <TabItem
//                 key={item.id}
//                 id={item.id}
//                 name={item.name}
//                 tabClickHandler={() => {
//                   dispatch(setSiteItemId(item.id));
//                   activeItem.checkKey(item.id);
//                 }}
//                 tabItemClass={`${
//                   activeItem.openValue === item.id
//                     ? "animate-tabColor border-b-[#3382B0]"
//                     : "border-b-[#87C4E7]"
//                 }`}
//               />
//             ))}
//           </ul>
//           <TabContent modemsPerSite={modemsPerSite} />
//         </>
//       ) : (
//         <div className="bg-white h-[60%] w-full flex justify-center items-center">
//           <RotatingLines
//             strokeColor="grey"
//             strokeWidth="5"
//             animationDuration="0.75"
//             width="96"
//             visible={true}
//           />
//         </div>
//       )}
//     </div>
//   );
// }
