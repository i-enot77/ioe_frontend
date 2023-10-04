import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import useChangeState from "../../hooks/useChangeState"
import { ChildrenProp } from "../types"
import { useAppDispatch } from "../../app/hooks"
import { setModemItem } from "../../app/reducers/modems"
import { devPanelToTrue, panelToFalse } from "../../app/reducers/sidePanel"

interface ModemItemProp {
  id: number | undefined
  modName: string
}

const ModemItem = ({ id, modName, children }: ModemItemProp & ChildrenProp) => {
  const state = useChangeState(false)

  const dispatch = useAppDispatch()

  const style = {
    item: `overflow-hidden transition-all duration-500 ease-in-out`,
    child: `flex flex-col text-sm ml-10 max-w-fit overflow-y-auto no-scrollbar`,
    modem: `mb-1.5 last:mb-0 border  rounded-md w-full`,
  }
  return (
    <div
      className={`${style.modem} ${style.item} ${
        state.value ? "border-[#87C4E7]" : "border-[#D9D9D9]"
      }`}
    >
      <div
        onClick={() => {
          state.handleState()
          dispatch(setModemItem(id))
          dispatch(panelToFalse())
          dispatch(devPanelToTrue())
        }}
        className="cursor-pointer text-black text-base mx-5 my-3 max-w-fit"
      >
        Modem {modName}
        <FontAwesomeIcon
          className={` ${state.value ? "rotate-90" : "rotate-0"} ${
            style.item
          } ml-1 origin-center`}
          icon={faChevronRight}
          size="2xs"
          style={{ color: "#000000" }}
        />
      </div>
      <div
        className={`${state.value ? "max-h-20" : "max-h-0"}  ${style.child} ${
          style.item
        }`}
      >
        {children}
      </div>
    </div>
  )
}
export default ModemItem
