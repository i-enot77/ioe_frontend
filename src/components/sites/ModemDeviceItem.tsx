import { useAppDispatch } from "../../app/hooks"
import { setDevDataById } from "../../app/reducers/devices"
import { devPanelToFalse } from "../../app/reducers/sidePanel"
import useChangeState from "../../hooks/useChangeState"

export type ModemDeviceProp = {
  id: number | undefined
  devName: string
}

function ModemDeviceItem({ id, devName }: ModemDeviceProp) {
  const devState = useChangeState(false)

  const dispatch = useAppDispatch()

  const style = {
    childItem: `mb-1 last:mb-2 cursor-pointer`,
  }
  return (
    <div
      tabIndex={1}
      className={`${style.childItem} ${
        devState.value ? "text-[#87C4E7]" : "text-[#808080]"
      }`}
      onClick={() => {
        devState.toggleState()
        dispatch(setDevDataById(id))
        dispatch(devPanelToFalse())
      }}
      onBlur={devState.toFalse}
    >
      device {devName}
    </div>
  )
}

export default ModemDeviceItem
