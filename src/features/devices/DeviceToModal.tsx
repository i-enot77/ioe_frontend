import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "../../components/Button";
import { useAppDispatch } from "../../services/hooks";
import { initOption } from "../../services/slices/option";
import { useLazyGetModemsQuery } from "@/services/modemApi";
import { setModemArr } from "@/services/slices/modems";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import { initDevData } from "@/services/slices/devices";

const style = {
  btn: `bg-[#007BFF] rounded w-full text-white font-bold uppercase mt-4 py-2 px-6`,
  form: `flex flex-col transition-all duration-500 ease-in-out  overflow-y-auto no-scrollbar`,
  inputClass: `absolute top-0 left-0 `,
  labelClass: `relative`,
  liItem: `cursor-pointer p-0.5 pl-2 mb-1 last:mb-0 rounded`,
};

const DeviceToModal = () => {
  const deviceItem = useSelector((state: RootState) => state.device.deviceData);
  const [fetchModems, { data: modemsArr }] = useLazyGetModemsQuery();
  const [selectedModem, setSelectedModem] = useState("");
  const dispatch = useAppDispatch();

  const handleModemChange = (value: string) => {
    setSelectedModem(value);
  };

  useEffect(() => {
    fetchModems().then(() => {
      if (modemsArr) {
        dispatch(setModemArr(modemsArr));
      }
    });
  }, []);

  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // const checkHandler = (value: number) => {
  //   selectedItems.includes(value)
  //     ? setSelectedItems(selectedItems.filter((item) => item !== value))
  //     : setSelectedItems([...selectedItems, value]);
  // };

  const assignDevice = () => {
    dispatch(initOption());
    dispatch(initDevData());
    console.log(selectedModem);
  };

  return deviceItem ? (
    <div className="w-[30%] h-full px-4 py-3 bg-white rounded-lg">
      <h2 className="title mb-4">Assign device:</h2>
      <div className="border border-[#E4E6EB] rounded p-4">
        <div className="">
          Device name: <span className="font-bold">{deviceItem.devName}</span>
        </div>
        <div className="py-2 mt-4">Add device to modem:</div>

        <div className="h-full">
          {/* <div
            className="px-2 py-3 border border-[#E4E6EB] flex justify-between items-center mt-5 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-xs ">choose modem list</span>
            <FontAwesomeIcon className="" icon={faSortDown} />
          </div> */}

          <Select onValueChange={handleModemChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose modem" />
            </SelectTrigger>

            <SelectContent className="max-h-[400px] overflow-y-auto">
              {modemsArr?.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.modemName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* <Dropdown
            drop={true}
            dropClassName={`${isOpen ? "max-h-32" : "max-h-0"} ${style.form}`}
          >
            <ul className="my-1">
              {modemsArr.map((item, index) => (
                <li
                  tabIndex={1}
                  key={index}
                  onClick={() => checkHandler(item.id ?? 0)}
                  className={`${
                    selectedItems.includes(item.id ?? 0)
                      ? "bg-[#A9D8F4]"
                      : "bg-white"
                  } ${style.liItem}`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </Dropdown> */}

          <Button className={style.btn} onClick={assignDevice}>
            Save
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};
export default DeviceToModal;
