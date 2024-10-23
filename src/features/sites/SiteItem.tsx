import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { SiteProp } from "./siteTypes";
import Button from "../../components/Button";

const style = {
  siteItem: `flex  justify-between items-center `,
};

const SiteItem = ({ siteName, clickHandler }: SiteProp) => {
  return (
    <>
      <div className={style.siteItem}>
        <FontAwesomeIcon icon={faChevronRight} style={{ color: "#000000" }} />
        <div className="ml-2 text-black text-base">Site {siteName}</div>
      </div>
      <div className={style.siteItem}>
        <Button className="ml-3" onClick={clickHandler}>
          <FontAwesomeIcon icon={faCircleMinus} style={{ color: "#808080" }} />
        </Button>
      </div>
    </>
  );
};

export default SiteItem;
