import SiteItem from "./SiteItem";
import { useNavigate } from "react-router-dom";
import {
  setSiteItemId,
  setClickedItem,
  setClicked,
  setSites,
} from "../../services/slices/sites";
import { useAppDispatch } from "../../services/hooks";
import { SiteItemProp } from "./siteTypes";
import {
  useDeleteSiteItemMutation,
  useGetSitesQuery,
} from "../../services/siteApi";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/services/store";

const Sites = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const clickedItem = useSelector(
    (state: RootState) => state.sites.clickedItem
  );

  const { data: sitesArr, isFetching } = useGetSitesQuery();
  const [deleteSite] = useDeleteSiteItemMutation();
  // const [fetchModems, { data: modemsArr }] = useLazyGetModemsQuery();

  useEffect(() => {
    if (sitesArr) dispatch(setSites(sitesArr));
  }, [sitesArr]);

  const handleClicks = (e: React.MouseEvent, itemId: SiteItemProp["id"]) => {
    switch (e.detail) {
      case 1: {
        dispatch(setClicked(true));
        if (clickedItem !== itemId) {
          dispatch(setClickedItem(itemId));
        }
        break;
      }
      case 2: {
        // fetchModems().then(() => {
        //   if (modemsArr) dispatch(setModemArr(modemsArr));
        //   console.log(modemsArr);
        // });
        dispatch(setClicked(false));
        dispatch(setClickedItem(null));
        navigate("/details");
        break;
      }
    }
  };

  const style = {
    siteItem: `w-full flex justify-between items-center border border-[#87C4E7] rounded px-5 py-2 mb-2 last:mb-0`,
  };
  return (
    <div className="w-full px-6 py-5 rounded-md bg-white">
      {sitesArr?.map((item, index) => (
        <div
          tabIndex={1}
          key={index}
          onClick={(e: React.MouseEvent) => {
            handleClicks(e, item.id);
            dispatch(setSiteItemId(item.id));
          }}
          className={`${
            clickedItem !== item.id ? "bg-white" : "bg-[#87C4E7]"
          } ${style.siteItem}`}
        >
          <SiteItem
            siteName={item.name}
            isActive={true}
            clickHandler={() => deleteSite(item.id)}
          ></SiteItem>
        </div>
      ))}
    </div>
  );
};

export default Sites;
