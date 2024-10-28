import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      if (state.ids.some(id => id === action.payload)) {
        state.ids = state.ids.filter(id => id !== action.payload);
      } else {
        state.ids.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
