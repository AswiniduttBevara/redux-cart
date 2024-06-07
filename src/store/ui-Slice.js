import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name : 'ui',
    initialState : {cartVisible : false, notification : null},
    reducers : {
        toggle(state){
            state.cartVisible = !state.cartVisible;
        },
        showNotification (state, action) {
            state.notification = {
                title : action.payload.title,
                status : action.payload.status,
                message : action.payload.message
            }
        }
    }
})

export default uiSlice.reducer;

export const uiSliceActions = uiSlice.actions;