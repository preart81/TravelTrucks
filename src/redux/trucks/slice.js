import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTrucks, fetchOneTruck, fetchTrucks } from './operations';

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
    allLocations: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    clearTrucks: state => {
      state.items = [];
    },
  },

  extraReducers: builder => {
    builder

      // all trucks
      .addCase(fetchAllTrucks.pending, handlePending)
      .addCase(fetchAllTrucks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allLocations = [
          ...new Set(action.payload.map(truck => truck.location)),
        ].sort();
      })
      .addCase(fetchAllTrucks.rejected, handleRejected)

      // filterd trucks
      .addCase(fetchTrucks.pending, handlePending)
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTrucks.rejected, handleRejected)

      // one truck
      .addCase(fetchOneTruck.pending, handlePending)
      .addCase(fetchOneTruck.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentTrack = action.payload;
      })
      .addCase(fetchOneTruck.rejected, handleRejected);
  },
});

export const { clearTrucks } = trucksSlice.actions;
export const trucksReducer = trucksSlice.reducer;
