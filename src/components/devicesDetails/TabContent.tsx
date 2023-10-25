import ModemItem from "../sites/ModemItem";
import ModemDeviceItem from "../sites/ModemDeviceItem";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ModemsArrProps, setModemItem } from "../../app/reducers/modems";
import { DevArrProps } from "../../app/reducers/devices";

type TabContentProps = {
  modemsPerSite: ModemsArrProps[];
};

export default function TabContent({ modemsPerSite }: TabContentProps) {
  const devicesArr = useAppSelector((state) => state.device.devices);
  const dispatch = useAppDispatch();

  const [modemItemId, setModemItemId] = useState<number | undefined>(undefined);
  const [devicesPerModem, setDevicesPerModem] = useState<DevArrProps[]>([]);

  useEffect(() => {
    if (modemItemId) {
      const devicesPerModem = devicesArr.filter(
        (device) => device.modemId === modemItemId
      );
      setDevicesPerModem(devicesPerModem);
    }
  }, [modemItemId]);
  return (
    <div className="overflow-y-auto no-scrollbar">
      {modemsPerSite.length > 0
        ? modemsPerSite.map((item, index) => (
            <ModemItem
              key={index}
              id={item.id}
              modName={item.name}
              handleClick={() => {
                dispatch(setModemItem(item.id));
                setModemItemId(item.id);
              }}
            >
              {devicesPerModem.map((devItem, i) => (
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
  );
}
