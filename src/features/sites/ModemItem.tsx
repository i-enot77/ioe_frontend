import { useAppDispatch } from "../../services/hooks";
import { setModemItem } from "../../services/slices/modems";
import { ModemsProps } from "@/services/modemApi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DevProps, useLazyGetDevicesArrQuery } from "@/services/deviceApi";
import useCheckKey from "@/hooks/useCheckKey";
import { setDeviceData } from "@/services/slices/devices";
import { changeTab } from "@/services/slices/tabs";

interface ModemItemProp {
  modName: string;
  modem: ModemsProps;
  onModemClick: () => void;
}

const ModemItem = ({ modName, modem, onModemClick }: ModemItemProp) => {
  const dispatch = useAppDispatch();
  const [fetchDevices, { data: devicesArr }] = useLazyGetDevicesArrQuery();

  const { openValue, checkKey } = useCheckKey();

  const handleClick = () => {
    fetchDevices();
    dispatch(setModemItem(modem));
    onModemClick();
  };

  const onDeviceClick = (device: DevProps) => {
    dispatch(setDeviceData(device));
    checkKey(device.id);
    dispatch(changeTab("device"));
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={modem.id}>
        <AccordionTrigger className="w-full">
          <div onClick={handleClick}>Modem {modName}</div>
        </AccordionTrigger>
        <AccordionContent>
          {devicesArr &&
            devicesArr.map((device) => (
              <div
                key={device.id}
                tabIndex={1}
                className={`${
                  openValue !== device.id ? "bg-white" : "bg-[#D9D9D9]"
                }  first:rounded-t-lg last:rounded-b-lg`}
                onClick={() => onDeviceClick(device)}
              >
                device {device.devName}
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default ModemItem;
