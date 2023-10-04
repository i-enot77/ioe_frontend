import { TextareaProp } from "./types"

export const TextareaItem = ({
  textareaName,
  label,
  id,
  placeholderItem,
  itemValue,
  onChangeHandler,
  textareaClassName,
  labelClassName,
  maxlength,
}: TextareaProp) => {
  return (
    <div className="flex flex-col mb-4 last:mb-0">
      <label htmlFor={textareaName} className={labelClassName}>
        {label}
      </label>

      <textarea
        id={id}
        name={textareaName}
        placeholder={placeholderItem}
        value={itemValue}
        onChange={onChangeHandler}
        className={`${textareaClassName} resize-none`}
        maxLength={maxlength}
      ></textarea>
    </div>
  )
}
