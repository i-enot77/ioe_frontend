import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../services/hooks";
import { setDevArr } from "../../services/slices/devices";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";
import Devices from "./Devices";
import DeviceToModal from "./DeviceToModal";

const style = {
  item: `w-full p-3 grid grid-rows-1 grid-cols-6 justify-items-center border-b border-[rgba(128, 128, 128, 0.14)]`,
  inputClass: ` w-full bg-white placeholder:text-text-color placeholder:text-[10px] p-1 ml-1 outline-none `,
};

export default function AssignDevice() {
  const deviceItem = useSelector((state: RootState) => state.device.deviceData);

  const devicesArr = useSelector((state: RootState) => state.device.devices);
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearch = (search: string) => {
    if (!search) {
      return devicesArr;
    }
    const filteredItems = devicesArr.filter(
      (item) =>
        item.serialNumber?.toLowerCase().includes(search.toLowerCase()) ||
        item.devName?.toLowerCase().includes(search.toLowerCase()) ||
        item.type?.toString().includes(search)
    );
    dispatch(setDevArr(filteredItems));
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="flex bg-white rounded-md p-8 h-[75vh]">
      <div className="overflow-y-auto h-full w-full">
        <h2 className="title pb-5 sticky top-0 bg-white">Available devices:</h2>

        {/* <div className="flex justify-center items-center bg-white w-[300px] rounded p-2 pl-5 mb-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" />
          <SearchInputItem
            inputClass={style.inputClass}
            type={"search"}
            inputName={"devicesSearch"}
            inputValue={searchValue}
            handleChange={inputChange}
            placeholder={"Filtering devices by number, name , model"}
          />
        </div> */}

        <Devices isDraggable={false} />
      </div>
      {deviceItem && <DeviceToModal />}
    </div>
  );
}
