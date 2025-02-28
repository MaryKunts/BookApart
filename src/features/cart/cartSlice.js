import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  orders: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push({
        id: action.payload.id,
        apartmentId: action.payload.apartmentId,
        term: action.payload.term,
        price: action.payload.price,
        length: action.payload.length,
      });
    },
    deleteOrder: (state, action) => {
      const index = state.orders.findIndex(
        (item) => item.id === action.payload.id
      );
      state.orders = state.orders.slice(index, 1);
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const { addOrder, deleteOrder, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
