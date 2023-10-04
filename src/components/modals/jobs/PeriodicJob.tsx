import Form from "../../../forms/Form"
import { InputItem } from "../../../forms/InputItem"
import { TextareaItem } from "../../../forms/TextareaItem"
import { Button } from "../../Button"
import { periodicJobsData } from "./data"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import {
  updatePeriodicJobInput,
  addPeriodicJob,
} from "../../../app/reducers/jobs"
import { initOption } from "../../../app/reducers/option"

export const style = {
  inputClass: `border border-[#EEF3F8] rounded px-4 py-1 mt-1 placeholder:text-sm placeholder:text-[#808080] text-black`,
  labelClass: `text-sm text-black flex flex-col mb-4 last:mb-0`,
  btn: `bg-[#87C4E7] rounded-lg text-white w-full py-1 text-base font-bold mt-3`,
}

export default function PeriodicJob() {
  const dispatch = useAppDispatch()
  const periodicJobData = useAppSelector((state) => state.jobs.periodicJobData)

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    dispatch(updatePeriodicJobInput({ [name]: value }))
  }

  const addJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(addPeriodicJob(periodicJobData))
    dispatch(initOption())
  }

  return (
    <Form
      formClass="bg-white flex flex-col px-20 py-3 rounded-lg "
      submit={addJobSubmit}
    >
      {periodicJobsData.map((item, index) => (
        <InputItem
          key={index}
          label={item.label}
          type={item.type}
          id={item.id}
          inputName={item.inputName}
          placeholder={item.placeholder}
          inputValue={periodicJobData[item.inputName]}
          onChangeInputHandler={handleChange}
          inputClassName={style.inputClass}
          labelClassName={style.labelClass}
        />
      ))}
      <TextareaItem
        label="Read params"
        id="readParams"
        textareaName="readParams"
        placeholderItem="Enter a read out params as a JSON"
        itemValue={periodicJobData.readParams}
        onChangeHandler={handleChange}
        textareaClassName={style.inputClass}
        labelClassName={style.labelClass}
        maxlength={50}
      />
      <Button buttonClass={style.btn}>Add</Button>
    </Form>
  )
}
