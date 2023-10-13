import SiteItem from "./SiteItem"
import Unassigned from "./Unassigned"
import { Button } from "../Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  deleteSite,
  fetchSites,
  setSiteItemId,
  setClickedItem,
  setClicked,
} from "../../app/reducers/sites"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { SiteItemProp } from "./siteTypes"

const Sites = () => {
  const navigate = useNavigate()

  useLayoutEffect(() => {
    dispatch(fetchSites())
  }, [])

  const dispatch = useAppDispatch()
  const sitesArr = useAppSelector((state) => state.sites.sites)
  const clickedItem = useAppSelector((state) => state.sites.clickedItem)

  const handleClicks = (e: React.MouseEvent, itemId: SiteItemProp["id"]) => {
    switch (e.detail) {
      case 1: {
        dispatch(setClicked(true))
        if (clickedItem !== itemId) {
          dispatch(setClickedItem(itemId))
        }
        break
      }
      case 2: {
        dispatch(setClicked(false))
        dispatch(setClickedItem(null))
        navigate("/details")
        break
      }
    }
  }

  const style = {
    siteItem: `w-full text-[14px] flex justify-between items-center border border-[#87C4E7] rounded px-5 py-2 mb-2 last:mb-0`,
  }
  return (
    <div className="w-[69%] overflow-y-auto no-scrollbar px-6 py-5 rounded-md bg-white">
      {sitesArr.map((item, index) => (
        <div
          tabIndex={1}
          key={index}
          onClick={(e: React.MouseEvent) => {
            handleClicks(e, item.id ?? 0)
            dispatch(setSiteItemId(item.id))
          }}
          className={`${
            clickedItem !== item.id ? "bg-white" : "bg-[#87C4E7]"
          } ${style.siteItem}`}
        >
          <SiteItem siteName={item.name} isActive={true}>
            <Button
              buttonClass="ml-3"
              clickHandler={(e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation()
                dispatch(deleteSite(item.id))
              }}
            >
              <FontAwesomeIcon
                icon={faCircleMinus}
                style={{ color: "#808080" }}
              />
            </Button>
          </SiteItem>
        </div>
      ))}

      <Unassigned />
    </div>
  )
}

export default Sites
