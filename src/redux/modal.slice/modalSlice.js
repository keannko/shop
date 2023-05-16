/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpened: false,
  isAuth: false,
  activeUser: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setStatus: (state, action) => ({
      ...state, isOpened: !state.isOpened,
    }),
    setAuth: (state, action) => ({
      ...state, isAuth: !state.isAuth,
    }),
    setActive: (state, action) => ({
      ...state, activeUser: action.payload,
    }),

  },
});

export const { setStatus, setAuth, setActive } = modalSlice.actions;

export default modalSlice.reducer;
