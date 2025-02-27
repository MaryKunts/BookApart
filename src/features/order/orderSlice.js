import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  term: "",
  price: "",
  length: "",
  isOpen: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.id = action.payload.id;
      state.term = action.payload.term;
      state.length = action.payload.length;
      state.price = action.payload.price;
    },
    deleteOrder: (state) => {
      state.id = "";
      state.term = "";
      state.price = "";
      state.length = "";
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const { addOrder, deleteOrder, openCart, closeCart } =
  orderSlice.actions;
export default orderSlice.reducer;
