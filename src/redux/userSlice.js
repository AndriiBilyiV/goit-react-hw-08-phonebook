import { createSlice } from '@reduxjs/toolkit';
import { createUser, logIn, logOut, refreshUser } from './operations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [createUser.fulfilled](state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.token = '';
      state.user = { name: '', email: '' };
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state, action) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.isRefreshing = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
    },
  },
});

export const userReducer = userSlice.reducer;
