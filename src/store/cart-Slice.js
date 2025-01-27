import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {items:[], totalQuantity : 0, changed :false},
    reducers : {
        addItemsToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if(!existingItem){
                state.items.push({
                    id : newItem.id,
                    name : newItem.title,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;

            }
        },
        removeItemsFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find( item => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if(existingItem.quantity === 1 ){
                state.items = state.items.filter(item => item.id !== id)
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        replaceCart(state, action){
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity
        } 
    }
})



export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;