import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { SiteProp } from "./siteTypes"
import { ChildrenProp } from "../types"

const style = {
  siteItem: `flex  justify-between items-center `,
}

const SiteItem = ({
  siteName,
  isActive,
  children,
}: SiteProp & ChildrenProp) => {
  return (
    <>
      <div className={style.siteItem}>
        <FontAwesomeIcon icon={faChevronRight} style={{ color: "#000000" }} />
        <div className="ml-2 text-black text-base">Site {siteName}</div>
      </div>
      <div className={style.siteItem}>
        {isActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="0.875em"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
              fill="#00c738"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="0.875em"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
              fill="#00c738"
            />
          </svg>
        )}
        {children}
      </div>
    </>
  )
}

export default SiteItem
