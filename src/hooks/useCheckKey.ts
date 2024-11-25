import { useState } from "react";

export default function useCheckKey() {
  //if device klicked/ckicked twice
  const [openValue, setOpenValue] = useState<string | null>(null);
  const checkKey = (keyProp: string) => {
    setOpenValue(openValue !== keyProp ? keyProp : null);
  };
  return {
    openValue,
    setOpenValue,
    checkKey,
  };
}
