import { SiteItemProp } from "../sites/siteTypes"

type TabItemProp = {
  tabClickHandler(): void
}

export default function TabItem({
  name,
  tabClickHandler,
}: SiteItemProp & TabItemProp) {
  return (
    <li
      onClick={tabClickHandler}
      className="max-w-max border-b-4 border-b-[#87C4E7] py-1 px-3"
    >
      Site {name}
    </li>
  )
}
