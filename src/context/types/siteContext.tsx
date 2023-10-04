export type SiteContextProp = {
  clicked: boolean
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
  clickedItem: number | null
  handleClicks(e: React.MouseEvent, itemId: SiteItemProp["id"]): void
  sitesArr: SiteItemProp[]
  setSitesArr: React.Dispatch<React.SetStateAction<SiteItemProp[]>>
  siteItem: SiteItemProp
  setSiteItem: React.Dispatch<React.SetStateAction<SiteItemProp>>
  deleteSite: (id: SiteItemProp["id"]) => Promise<void>
}

export type SiteItemProp = {
  id: number | null
  siteName: string
}
