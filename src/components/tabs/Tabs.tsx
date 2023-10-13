import { useAppDispatch, useAppSelector } from "../../app/hooks"
import TabItem from "./TabItem"
import TabContent from "./TabContent"
import { useEffect, useState } from "react"
import {
  useGetDevicesQuery,
  useGetModemsQuery,
  useGetSitesQuery,
} from "../../app/api"
import { SiteItemProp } from "../sites/siteTypes"
import { setSiteItemId } from "../../app/reducers/sites"
import modems from "../../app/reducers/modems"
import devices from "../../app/reducers/devices"

export default function Tabs() {
  const [filteredSites, setFilteredSites] = useState<SiteItemProp[]>([])

  const dispatch = useAppDispatch()
  const siteItemId = useAppSelector((state) => state.sites.siteItemId)

  const { data: sitesArr } = useGetSitesQuery()
  const { data: modemsArr } = useGetModemsQuery()
  const { data: devicesArr } = useGetDevicesQuery()

  useEffect(() => {
    const filteredSitesData = sitesArr?.filter((site) => {
      return modemsArr?.some((modem) => modem.siteId === site.id)
    })
    setFilteredSites(filteredSitesData ?? [])
  }, [])

  useEffect(() => {
    const filteredModemsData = modemsArr?.filter((modem) => {
      devices
    })
  }, [siteItemId])

  return (
    <div className="bg-white rounded-lg px-5 py-8">
      <ul className="flex items-center mb-7">
        {filteredSites.map((item) => (
          <TabItem
            key={item.id}
            id={item.id}
            name={item.name}
            tabClickHandler={() => dispatch(setSiteItemId(item.id))}
          />
        ))}
      </ul>
      <TabContent />
    </div>
  )
}
