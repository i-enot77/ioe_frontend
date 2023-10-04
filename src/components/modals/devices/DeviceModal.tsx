import { InputItem } from "../../../forms/InputItem"
import { TextareaItem } from "../../../forms/TextareaItem"
import { TimezonePicker } from "../../TimezonePicker"
import { Button } from "../../Button"
import Form from "../../../forms/Form"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import {
  addDevice,
  updateDevField,
  updateDevice,
} from "../../../app/reducers/devices"
import { data } from "./data"
import { initOption } from "../../../app/reducers/option"

const style = {
  inputClass: `border border-[#EEF3F8] rounded px-4 py-1 mt-1 placeholder:text-sm placeholder:text-[#808080]`,
  labelClass: `text-sm text-black flex flex-col mb-4 last:mb-0`,
  btn: `bg-[#87C4E7] rounded-lg text-white w-full py-1 text-base font-bold mt-3`,
  wrapper: `bg-white px-16 py-6 rounded-md`,
}

export type DevProp = {
  isOpen: boolean
  isEdit?: boolean
  wrapperStyle: string
}

export default function DeviceModal({ isOpen, isEdit, wrapperStyle }: DevProp) {
  const dispatch = useAppDispatch()
  const deviceData = useAppSelector((state) => state.device.deviceData)

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    dispatch(updateDevField({ [name]: value }))
  }

  const editDeviceSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(updateDevice(deviceData))
  }

  const addDeviceSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(addDevice(deviceData))
    dispatch(initOption())
  }

  return isOpen ? (
    <div className={`${style.wrapper} ${wrapperStyle} `}>
      <p className="title mb-5">{isEdit ? "Edit a device" : "Add a device"}</p>
      <Form
        submit={isEdit ? editDeviceSubmit : addDeviceSubmit}
        formClass={"flex flex-col"}
      >
        {data.map((item, index) => (
          <InputItem
            key={index}
            label={item.label}
            type={item.type}
            inputName={item.inputName}
            placeholder={item.placeholder}
            id={item.id}
            inputValue={deviceData[item.inputName]}
            onChangeInputHandler={handleChange}
            inputClassName={style.inputClass}
            labelClassName={style.labelClass}
          />
        ))}
        <TextareaItem
          textareaName="loginInfo"
          placeholderItem="Enter device login info as JSON type"
          label="Login Info"
          id="loginInfo"
          itemValue={deviceData.loginInfo.json}
          onChangeHandler={handleChange}
          textareaClassName={style.inputClass}
          labelClassName={style.labelClass}
          maxlength={100}
        />
        <TimezonePicker />

        <Button buttonClass={style.btn}>
          {isEdit ? "Save changes" : "Create"}
        </Button>
      </Form>
    </div>
  ) : null
}
