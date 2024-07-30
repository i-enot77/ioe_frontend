import ModemItem from "./ModemItem";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import ModemDeviceTab from "./ModemDeviceTab";
import JobsAlarmsTab from "./JobsAlarmsTab";
import { useEffect, useState } from "react";
import { ModemsProps, useLazyGetModemsQuery } from "@/services/modemApi";
import { useAppDispatch } from "@/services/hooks";
import { setModemItem } from "@/services/slices/modems";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

export const SiteDetails = () => {
  const siteItemId = useSelector((state: RootState) => state.sites.siteItemId);
  const [isEditTab, setEditTab] = useState(false);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [fetchModems, { data: modemsArr, isFetching, isSuccess }] =
    useLazyGetModemsQuery();

  useEffect(() => {
    fetchModems();
  }, [fetchModems]);

  const onModemClick = (modem: ModemsProps) => {
    setEditTab(true);
    dispatch(setModemItem(modem));
  };

  return (
    <div className=" flex-grow bg-[#F3F2EF] h-[90%] w-full grid grid-rows-1 grid-cols-[2fr_1fr] py-6 px-12">
      {modemsArr && (
        <div className="h-full w-full pr-4 flex flex-col">
          <div className="bg-white p-5 rounded-md flex justify-between items-center">
            <Button className="font-bold text-lg" onClick={() => navigate(-1)}>
              Back to sites
            </Button>
            <div className="text-black font-bold text-base">
              {modemsArr.length} total modems
            </div>
          </div>

          <div className="bg-white flex-grow h-full overflow-y-auto  mt-2  px-6 rounded-md">
            <h2 className="title py-3 sticky top-0 bg-white">
              Site {siteItemId}
            </h2>
            <div className="">
              {modemsArr.map((modem) => (
                <ModemItem
                  key={modem.id}
                  modName={modem.modemName}
                  modem={modem}
                  onModemClick={() => onModemClick(modem)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="flex-grow w-full h-full rounded-md">
        {isEditTab ? <ModemDeviceTab /> : <JobsAlarmsTab />}
      </div>
    </div>
  );
};
