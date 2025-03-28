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
        images: action.payload.images,
        type: action.payload.type,
        city: action.payload.city,
        country: action.payload.country,
        term: action.payload.term,
        price: action.payload.price,
        length: action.payload.length,
      });
    },
    deleteOrder: (state, action) => {
      const index = state.orders.findIndex(
        (item) => item.id === action.payload.id
      );
      const newOrders = state.orders.toSpliced(index, 1);
      state.orders = newOrders;
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
