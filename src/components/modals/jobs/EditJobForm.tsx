import { Button } from "../../Button"
import Form from "../../../forms/Form"
import { InputItem } from "../../../forms/InputItem"
import { TextareaItem } from "../../../forms/TextareaItem"
import { style } from "./PeriodicJob"
import { periodicJobsData } from "./data"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { JobProp, updatePeriodicJobInput } from "../../../app/reducers/jobs"

type EditFormProp = {
  submitProp: (e: React.FormEvent) => Promise<void>
}

function EditJobForm({ submitProp }: EditFormProp) {
  const dispatch = useAppDispatch()
  const periodicJobData = useAppSelector((state) => state.jobs.periodicJobData)

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    periodicJobData &&
      dispatch(updatePeriodicJobInput({ ...periodicJobData, [name]: value }))
  }
  return (
    <Form
      formClass="h-full bg-white flex flex-col px-20 py-3 rounded-lg "
      submit={submitProp}
    >
      {periodicJobsData.map((item, index) => (
        <InputItem
          key={index}
          label={item.label}
          type={item.type}
          id={item.id}
          inputName={item.inputName}
          placeholder={item.placeholder}
          inputValue={
            (periodicJobData as JobProp | undefined)?.[item.inputName] ?? ""
          }
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
        itemValue={periodicJobData?.readParams || ""}
        onChangeHandler={handleChange}
        textareaClassName={style.inputClass}
        labelClassName={style.labelClass}
        maxlength={50}
      />
      <Button buttonClass={style.btn}>Add</Button>
    </Form>
  )
}

export default EditJobForm
