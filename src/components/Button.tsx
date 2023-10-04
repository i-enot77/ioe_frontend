import { ButtonProp } from "./types"

export const Button = ({ children, buttonClass, clickHandler }: ButtonProp) => {
  return (
    <button className={buttonClass} onClick={clickHandler}>
      {children}
    </button>
  )
}
