import { SiteItemProp } from "../sites/siteTypes";

type TabItemProp = {
  tabClickHandler(): void;
  tabItemClass: string;
};

export default function TabItem({
  name,
  tabClickHandler,
  tabItemClass,
}: SiteItemProp & TabItemProp) {
  return (
    <li
      onClick={tabClickHandler}
      className={`max-w-max border-b-4  py-1 px-3 ${tabItemClass}`}
    >
      Site {name}
    </li>
  );
}
