import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    change(state, action) {
      state.value = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { change } = filterSlice.actions;
