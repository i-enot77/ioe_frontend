import { createSlice } from '@reduxjs/toolkit'

export interface InitOptionProp {
    option: "addDevice" | "assignDevice" | "editDevice" | "deleteDevice" | "addJob" | "editJob" | "deleteJob" | undefined
}

const initialState: InitOptionProp = {
    option: undefined,
}

export const optionSlice = createSlice({
    name: "option",
    initialState,
    reducers: {
        addDeviceOption(state){
            state.option = "addDevice"
        },
        assignDeviceOption(state){
            state.option = "assignDevice"
        },
        editDeviceOption(state){
            state.option = "editDevice"
        },
        delDeviceOption(state){
            state.option = "deleteDevice"
        },
        addJobOption(state){
            state.option = "addJob"
        },
        editJobOption(state){
            state.option = "editJob"
        },
        deleteJobOption(state){
            state.option = "deleteJob"
        },
        initOption(state){
         state.option = initialState.option
        }
    }
})

export const { addDeviceOption, assignDeviceOption, editDeviceOption, delDeviceOption, addJobOption, editJobOption, deleteJobOption, initOption} = optionSlice.actions
export default optionSlice.reducer