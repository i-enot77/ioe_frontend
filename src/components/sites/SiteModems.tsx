import { useEffect } from "react";
import ModemItem from "./ModemItem";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchDevices } from "../../app/reducers/devices";
import { fetchModems } from "../../app/reducers/modems";
import ModemDeviceItem from "./ModemDeviceItem";
import TopPanel from "./TopPanel";

export const SiteModems = () => {
  const dispatch = useAppDispatch();
  const siteItemId = useAppSelector((state) => state.sites.siteItemId);
  const devicesArr = useAppSelector((state) => state.device.devices);
  const searchModemsArr = useAppSelector(
    (state) => state.modems.searchModemsArr
  );

  useEffect(() => {
    dispatch(fetchDevices());
    dispatch(fetchModems());
  }, []);

  return (
    <div className="bg-[#F3F2EF] h-[100%] w-full">
      <TopPanel />
      <div className="h-[82%] rounded-md px-6 pb-5 bg-white">
        <p className="title w-full z-10 mb-5 sticky top-0 pt-5 pb-3">
          Site {siteItemId}
        </p>
        <div className="h-[82%] overflow-y-auto no-scrollbar">
          {searchModemsArr.length
            ? searchModemsArr.map((item, index) => (
                <ModemItem key={index} id={item.id} modName={item.name}>
                  {devicesArr.map((devItem, i) => (
                    <ModemDeviceItem
                      key={i}
                      id={devItem.id}
                      devName={devItem.devName}
                    />
                  ))}
                </ModemItem>
              ))
            : "No results"}
        </div>
      </div>
    </div>
  );
};
