import { useState } from "react"

const useChangeState = (stateProp: boolean) => {
  const [value, setValue] = useState(stateProp)
  const handleState = () => {
    setValue(!value)
  }
  const toFalse = () => {
    setValue(false)
  }
  return {
    value,
    handleState,
    toFalse,
  }
}

export default useChangeState
