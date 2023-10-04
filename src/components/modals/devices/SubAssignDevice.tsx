import { useState } from "react"
import { Button } from "../../Button"
import Dropdown from "../../Dropdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import Form from "../../../forms/Form"
import { InputItem } from "../../../forms/InputItem"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { initOption } from "../../../app/reducers/option"

const style = {
  btn: `bg-[#007BFF] rounded w-full text-white text-xs font-bold h-[40px] mt-8`,
  form: `flex flex-col `,
}

export type SubAssignProp = {
  deviceName: string | number | null
}

export default function SubAssignDevice({ deviceName }: SubAssignProp) {
  const modemsArr = useAppSelector((state) => state.modems.modemsArr)
  const dispatch = useAppDispatch()

  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const checkHandler = (value: string) => {
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((item) => item !== value))
    } else {
      setSelectedItems([...selectedItems, value])
    }
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    dispatch(initOption())
    setSelectedItems([])
  }

  return deviceName ? (
    <div className="w-[30%] p-4 bg-white rounded-lg">
      <p className="title mb-4">Assign device</p>
      <div className="border border-[#E4E6EB] rounded p-4">
        <p className="text-sm">
          Device name: <span className="font-bold">{deviceName}</span>
        </p>
        <p className="text-sm mt-2">Add device to modem</p>

        <div>
          <div
            className="px-2 py-3 border border-[#E4E6EB] flex justify-between items-center mt-5 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-xs ">choose modem list</span>
            <FontAwesomeIcon className="" icon={faSortDown} />
          </div>
          <Form submit={handleSubmit}>
            <Dropdown drop={isOpen} dropClassName={style.form}>
              {modemsArr.map((item, index) => (
                <InputItem
                  key={index}
                  label={item.name}
                  type={"checkbox"}
                  id={item.name}
                  inputValue={item.name}
                  onChangeInputHandler={() => checkHandler(item.name)}
                  isCheck={selectedItems.includes(item.name)}
                />
              ))}
            </Dropdown>
            <Button buttonClass={style.btn}>Save</Button>
          </Form>
        </div>
      </div>
    </div>
  ) : null
}
