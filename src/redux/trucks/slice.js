import { createSlice } from '@reduxjs/toolkit';
import { fetchOneTruck, fetchTrucks } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const trucksSlice = createSlice({
  name: 'trucks',
  initialState: {
    items: [],
    currentTrack: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.pending, handlePending)
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTrucks.rejected, handleRejected)

      .addCase(fetchOneTruck.pending, handlePending)
      .addCase(fetchOneTruck.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentTrack = action.payload;
      })
      .addCase(fetchOneTruck.rejected, handleRejected);
  },
});

export const trucksReducer = trucksSlice.reducer;
