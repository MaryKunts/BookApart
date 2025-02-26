import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  term: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.id = action.payload.id;
      state.term = action.payload.term;
    },
    deleteOrder: (state) => {
      state.id = "";
      state.term = "";
    },
  },
});

export const { addOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
