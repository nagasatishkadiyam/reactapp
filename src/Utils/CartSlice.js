import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "cart",
    initialState: {
        items : []
    },
    reducers : {
        addItem : (state, action) => {
            state.items.push(action.payload);

        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearItems: (state) => {
            state.items.length = 0;
            // or
            // return {items : []};
        }
    }
});

//exporting the actions.
export const {addItem, removeItem,  clearItems} = CartSlice.actions;
//exporting the reducre.
export default CartSlice.reducer;