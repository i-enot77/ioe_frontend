import { useState } from "react"

export default function useCheckKey() {
  //if device klicked/ckicked twice
  const [openValue, setOpenValue] = useState<null | number | string>(null)
  const checkKey = (keyProp: number | string | null) => {
    setOpenValue(openValue !== keyProp ? keyProp : null)
  }
  return {
    openValue,
    setOpenValue,
    checkKey,
  }
}
