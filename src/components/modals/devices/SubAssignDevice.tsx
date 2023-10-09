import { useEffect, useState } from "react"
import { Button } from "../../Button"
import Dropdown from "../../Dropdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { initOption } from "../../../app/reducers/option"
import { fetchModems } from "../../../app/reducers/modems"

const style = {
  btn: `bg-[#007BFF] rounded w-full text-white text-xs font-bold h-[40px] mt-4`,
  form: `flex flex-col transition-all duration-500 ease-in-out  overflow-y-auto no-scrollbar`,
  inputClass: `absolute top-0 left-0 `,
  labelClass: `relative`,
  liItem: `cursor-pointer p-0.5 pl-2 mb-1 last:mb-0 rounded`,
}

export type SubAssignProp = {
  deviceName: string | number | null
}

export default function SubAssignDevice({ deviceName }: SubAssignProp) {
  const modemsArr = useAppSelector((state) => state.modems.modemsArr)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchModems())
  }, [])

  const [isOpen, setIsOpen] = useState(false)
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const checkHandler = (value: number) => {
    selectedItems.includes(value)
      ? setSelectedItems(selectedItems.filter((item) => item !== value))
      : setSelectedItems([...selectedItems, value])
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    dispatch(initOption())
    console.log(selectedItems)
    setSelectedItems([])
  }

  return deviceName ? (
    <div className="w-[30%] h-full px-4 py-3 bg-white rounded-lg">
      <p className="title mb-4">Assign device</p>
      <div className="border border-[#E4E6EB] rounded p-4">
        <p className="text-sm">
          Device name: <span className="font-bold">{deviceName}</span>
        </p>
        <p className="text-sm mt-2">Add device to modem</p>

        <div className="h-full">
          <div
            className="px-2 py-3 border border-[#E4E6EB] flex justify-between items-center mt-5 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-xs ">choose modem list</span>
            <FontAwesomeIcon className="" icon={faSortDown} />
          </div>

          <Dropdown
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
          </Dropdown>

          <Button buttonClass={style.btn} clickHandler={handleSubmit}>
            Save
          </Button>
        </div>
      </div>
    </div>
  ) : null
}
