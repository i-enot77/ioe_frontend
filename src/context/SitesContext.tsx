import { createContext, useState, useLayoutEffect, useEffect } from "react"
import { ChildrenProp } from "../components/types/index"
import { SiteContextProp, SiteItemProp } from "./types/siteContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const SiteContext = createContext<SiteContextProp>({} as SiteContextProp)

export const SitesContextProvider = ({ children }: ChildrenProp) => {
  const [sitesArr, setSitesArr] = useState<SiteItemProp[]>([])
  const [siteItem, setSiteItem] = useState<SiteItemProp>({
    id: null,
    siteName: "",
  })

  const navigate = useNavigate()

  // ----> po kliknięciu - zalezność czy się odpalą przyciski
  const [clicked, setClicked] = useState<boolean>(false)
  // ----> po kliknięciu w Site, przyciski dla ButtonsArea się włączą
  // sprawdzam czy klikam raz czy dwa
  const [clickedItem, setClickedItem] = useState<SiteItemProp["id"]>(null)

  const handleClicks = (e: React.MouseEvent, itemId: SiteItemProp["id"]) => {
    switch (e.detail) {
      case 1: {
        setClicked(true)
        if (clickedItem !== itemId) {
          setClickedItem(itemId)
        }
        break
      }
      case 2: {
        setClicked(false)
        setClickedItem(null)
        navigate("/details")
        break
      }
    }
  }

  //sites fetching
  // useLayoutEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get("http://localhost:3500/sites")
  //       setSitesArr(data)
  //       console.log(sitesArr)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   fetchData()
  // }, [])

  //delete site
  const deleteSite = async (id: SiteItemProp["id"]) => {
    try {
      axios.delete(`http://localhost:3500/sites/${id}`)
      setSitesArr((sites) => sites.filter((item) => item.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const value: SiteContextProp = {
    clicked,
    setClicked,
    clickedItem,
    handleClicks,
    sitesArr,
    siteItem,
    setSiteItem,
    setSitesArr,
    deleteSite,
  }

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}
