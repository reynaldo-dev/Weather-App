import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState =  {
    show : true
}




export const uiSlice = createSlice({
    name: 'ui',

    initialState,
    reducers: {
        
        showLoader: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload
        },
    },

})

export const { showLoader } = uiSlice.actions

export default uiSlice.reducer