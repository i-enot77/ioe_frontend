import { useState } from "react"
import DeviceItem from "./DeviceItem"
import SubAssignDevice from "./SubAssignDevice"
import SearchInputItem from "../../../forms/SearchInputItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import DeviceHeader from "./DeviceHeader"
import useCheckKey from "../../../hooks/useCheckKey"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { setDevices } from "../../../app/reducers/devices"

const style = {
  item: `w-full p-3 grid grid-rows-1 grid-cols-6 justify-items-center border-b border-[rgba(128, 128, 128, 0.14)]`,
  inputClass: ` w-full bg-white placeholder:text-text-color placeholder:text-[10px] p-1 ml-1 outline-none `,
}
const headerContent = [
  "Serial number",
  "Modem",
  "Name",
  "Type",
  "Timezone",
  "Site",
]

export default function AssignDevice() {
  const devicesArr = useAppSelector((state) => state.device.devices)
  const dispatch = useAppDispatch()

  //if device klicked/ckicked twice
  const openKey = useCheckKey()

  const [searchValue, setSearchValue] = useState<string>("")
  const handleSearch = (search: string) => {
    if (!search) {
      return devicesArr
    }
    const filteredItems = devicesArr.filter(
      (item) =>
        item.serialNumber?.toLowerCase().includes(search.toLowerCase()) ||
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.type?.toString().includes(search)
    )
    dispatch(setDevices(filteredItems))
  }

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    handleSearch(e.target.value)
  }

  return (
    <div className="w-[970px] h-full">
      <p className="title mb-5">Available devices</p>

      <div className="flex justify-center items-center bg-white w-[300px] rounded p-2 pl-5 mb-4">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xs" />
        <SearchInputItem
          inputClass={style.inputClass}
          type={"search"}
          inputName={"devicesSearch"}
          inputValue={searchValue}
          handleChange={inputChange}
          placeholder={"Filtering devices by number, name , model"}
        />
      </div>
      <div
        className={`${
          openKey.openValue ? "flex" : "flex flex-col"
        } w-full rounded-lg`}
      >
        <div
          className={`${
            openKey.openValue ? "w-[70%]" : "w-full"
          } flex flex-col mr-3 h-full  bg-white p-3 rounded-lg`}
        >
          <div className="w-full">
            <div className={`${style.item} border-b-0 rounded-lg mb-3`}>
              {headerContent.map((item, index) => (
                <DeviceHeader key={index} title={item} />
              ))}
            </div>

            <div className="w-full h-80 overflow-y-auto no-scrollbar">
              {!devicesArr.length ? (
                <p>No results</p>
              ) : (
                devicesArr.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => openKey.checkKey(item.name)}
                    className={`${
                      openKey.openValue !== item.name
                        ? "bg-white"
                        : "bg-[#D9D9D9]"
                    } ${style.item} first:rounded-t-lg last:rounded-b-lg`}
                  >
                    <DeviceItem
                      serialNumber={item.serialNumber}
                      modem={item.modem}
                      devName={item.name}
                      type={item.type}
                      timezone={item.timezone}
                      site={item.site}
                      assignModal={true}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <SubAssignDevice deviceName={openKey.openValue} />
      </div>
    </div>
  )
}
