import Form from "../forms/Form"
import { InputItem } from "../forms/InputItem"
import { TextareaItem } from "../forms/TextareaItem"
import { Button } from "../components/Button"
import { modemData } from "./modemData"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { editInput, updateModemItem } from "../app/reducers/modems"

function EditModem() {
  const dispatch = useAppDispatch()
  const modemItem = useAppSelector((state) => state.modems.modemItem)

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    dispatch(editInput({ [name]: value }))
  }

  const editModemSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(updateModemItem(modemItem))
    console.log("editModem")
  }

  const style = {
    inputClass: `border border-[#EEF3F8] rounded px-4 py-1 mt-1 placeholder:text-sm placeholder:text-[#808080]`,
    labelClass: `text-sm text-black flex flex-col mb-4 last:mb-0`,
    btn: `bg-[#87C4E7] rounded-lg text-white w-full py-1 text-base font-bold mt-3`,
    wrapper: `bg-white px-16 py-6 rounded-md`,
  }
  return (
    <div
      className={`${style.wrapper} w-full h-full overflow-y-auto no-scrollbar`}
    >
      <Form formClass={"flex flex-col"} submit={editModemSubmit}>
        {modemData.map((item, index) => (
          <InputItem
            key={index}
            label={item.label}
            type={item.type}
            inputName={item.inputName}
            placeholder={item.placeholder}
            id={item.id}
            inputValue={modemItem[item.inputName]}
            onChangeInputHandler={handleChange}
            inputClassName={style.inputClass}
            labelClassName={style.labelClass}
          />
        ))}
        <TextareaItem
          textareaName="config"
          placeholderItem="Enter modem login info as JSON type"
          label="Config"
          id="config"
          itemValue={modemItem.config}
          onChangeHandler={handleChange}
          textareaClassName={style.inputClass}
          labelClassName={style.labelClass}
          maxlength={100}
        />

        <Button buttonClass={style.btn}>Save</Button>
      </Form>
    </div>
  )
}

export default EditModem
