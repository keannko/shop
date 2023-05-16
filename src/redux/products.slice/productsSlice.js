import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => ({
      products: action.payload,
    }),
  },
});

export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;
