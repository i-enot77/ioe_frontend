import Form from "../../../forms/Form"
import { InputItem } from "../../../forms/InputItem"
import { TextareaItem } from "../../../forms/TextareaItem"
import { Button } from "../../Button"
import { style } from "./PeriodicJob"
import { jobsData } from "./data"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { updatePeriodicJobInput } from "../../../app/reducers/jobs"
import { initOption } from "../../../app/reducers/option"
import { useAddJobItemMutation } from "../../../app/api"
import { EditInputProp } from "../../types"

export default function JobModal() {
  const dispatch = useAppDispatch()
  const periodicJobData = useAppSelector((state) => state.jobs.periodicJobData)

  const [addJob] = useAddJobItemMutation()

  const handleChange = (e: EditInputProp) => {
    const { name, value } = e.target
    dispatch(updatePeriodicJobInput({ ...periodicJobData, [name]: value }))
  }

  const addJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(initOption())
    addJob(periodicJobData)
  }

  return (
    <Form
      formClass="bg-white flex flex-col px-20 py-3 rounded-lg "
      submit={() => {
        addJobSubmit
        dispatch({ type: "RESET" })
      }}
    >
      {jobsData.map((item, index) => (
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
