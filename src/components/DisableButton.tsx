import { DisableButtonProp } from "./types"

export const DisableButton = ({
  children,
  buttonClass,
  clickHandler,
  isDisabled,
}: DisableButtonProp) => {
  return (
    <button
      disabled={!isDisabled ? true : false}
      onClick={clickHandler}
      className={buttonClass}
    >
      {children}
    </button>
  )
}
