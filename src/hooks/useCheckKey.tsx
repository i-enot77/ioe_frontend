import { useState } from "react"

export default function useCheckKey() {
  //if device klicked/ckicked twice
  const [openValue, setOpenValue] = useState<undefined | number | string>(
    undefined
  )
  const checkKey = (keyProp: number | string | undefined) => {
    setOpenValue(openValue !== keyProp ? keyProp : undefined)
  }
  return {
    openValue,
    setOpenValue,
    checkKey,
  }
}
