import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products.slice/productsSlice';
import modalReducer from './modal.slice/modalSlice';
import usersReducer from './users.slice/usersSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    modal: modalReducer,
    users: usersReducer,
  },
});
