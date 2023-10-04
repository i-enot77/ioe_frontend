import { SearchInputProp } from "./types"

export default function SearchInputItem({
  inputClass,
  type,
  inputName,
  inputValue,
  handleChange,
  placeholder,
}: SearchInputProp) {
  return (
    <input
      className={inputClass}
      type={type}
      name={inputName}
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}
