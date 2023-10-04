import { InputProp } from "./types"

export const InputItem = ({
  labelName,
  label,
  type,
  id,
  inputName,
  placeholder,
  inputValue,
  onChangeInputHandler,
  inputClassName,
  labelClassName,
  isCheck,
}: InputProp) => {
  return (
    <label htmlFor={labelName} className={labelClassName}>
      {label}

      <input
        type={type}
        id={id}
        name={inputName}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeInputHandler}
        className={inputClassName}
        checked={isCheck}
      />
    </label>
  )
}
