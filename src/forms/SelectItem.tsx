import { ChildrenProp } from "../components/types"
import { SelectProps } from "./types"

export const SelectItem = ({
  labelText,
  selectName,
  id,
  option,
  children,
}: SelectProps & ChildrenProp) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <select name={selectName} id={id} multiple>
        <option value="">{option}</option>
        {children}
      </select>
    </>
  )
}
