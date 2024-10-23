import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type SiteItemProp = {
  id: number;
  name: string;
};

export interface initStateProps {
  sites: SiteItemProp[];
  siteItemId: number | null;
  clickedItem: SiteItemProp["id"] | null;
  clicked: boolean;
}

const initialState: initStateProps = {
  sites: [],
  siteItemId: null,
  // sprawdzam czy klikam raz czy dwa
  clickedItem: null,
  // ----> po kliknięciu - zalezność czy się odpalą przyciski
  clicked: false,
};

export const sitesSlice = createSlice({
  name: "sites",
  initialState,
  reducers: {
    setSites(state, action: PayloadAction<SiteItemProp[]>) {
      state.sites = action.payload;
    },
    setSiteItemId(state, action: PayloadAction<number | null>) {
      state.siteItemId = action.payload;
    },
    setClickedItem(state, action: PayloadAction<SiteItemProp["id"] | null>) {
      state.clickedItem = action.payload;
    },
    setClicked(state, action: PayloadAction<boolean>) {
      state.clicked = action.payload;
    },
  },
});

export const { setSites, setSiteItemId, setClickedItem, setClicked } =
  sitesSlice.actions;
export default sitesSlice.reducer;
