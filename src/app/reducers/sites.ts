import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'


export type SiteItemProp = {
    id: number | null
    siteName: string
    
  }

export interface initStateProps {
    sites: SiteItemProp []
    siteItem: SiteItemProp
    clickedItem: SiteItemProp["id"] | null
    clicked: boolean
}

const initialState: initStateProps = {
    sites: [],
    siteItem: {
        id: null,
        siteName: "",
    },
// ----> po kliknięciu w Site, przyciski dla ButtonsArea się włączą
// sprawdzam czy klikam raz czy dwa
    clickedItem: null,
// ----> po kliknięciu - zalezność czy się odpalą przyciski
    clicked: false
}

export const fetchSites = createAsyncThunk(
    'sites/fetchSites',
    async () => {
        const response = await axios.get("http://localhost:3500/sites")
        return response.data
    }
)
export const deleteSite = createAsyncThunk(
    'sites/deleteSite',
    async (id:SiteItemProp["id"]) => {
       axios.delete(`http://localhost:3500/sites/${id}`)
   return id
    }
)

export const sitesSlice = createSlice({
   name: "sites",
   initialState,
   reducers: {
    setSites(state, action: PayloadAction<SiteItemProp[]>) {
        state.sites = action.payload
    },
    setSiteItem(state, action: PayloadAction<SiteItemProp>) {
        state.siteItem = action.payload
    },
    setClickedItem(state, action: PayloadAction<SiteItemProp["id"] | null>) {
        state.clickedItem = action.payload
    },
    setClicked(state, action: PayloadAction<boolean>) {
        state.clicked = action.payload
    }
   },
   extraReducers: (builder) => {
    builder
    .addCase(fetchSites.fulfilled, (state, action) => {
        state.sites = action.payload
    })
    .addCase(deleteSite.fulfilled, (state, action) => {
        state.sites = state.sites.filter((site) => site.id !== action.payload)
      });
   }
})

export const { setSites, setSiteItem, setClickedItem, setClicked } = sitesSlice.actions
export default sitesSlice.reducer