import { useState } from "react"

const useChangeState = (stateProp: boolean) => {
  const [value, setValue] = useState(stateProp)
  const toggleState = () => {
    setValue(!value)
  }
  const toFalse = () => {
    setValue(false)
  }
  return {
    value,
    toggleState,
    toFalse,
  }
}

export default useChangeState
