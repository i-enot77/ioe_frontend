import { createSlice } from '@reduxjs/toolkit'

export interface SidePanelProp {
    panelChange: boolean
    devicePanel: boolean
}

const initialState: SidePanelProp = {
    panelChange: true,
    devicePanel: false
}

export const sideSlice = createSlice ({
    name: 'sidePanel',
    initialState,
    reducers: {
        panelToFalse(state){
            state.panelChange = false
        },
        panelToTrue(state){
            state.panelChange = true
        },
        devPanelToFalse(state){
            state.devicePanel = false
        },
        devPanelToTrue(state){
            state.devicePanel = true
        }
    }
})

export const { panelToFalse, panelToTrue, devPanelToFalse, devPanelToTrue } = sideSlice.actions
export default sideSlice.reducer