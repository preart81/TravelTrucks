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
    totalItems: 0,
    itemsPerPage: 10,
    currentPage: 1,
  },

  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    clearTrucks: state => {
      state.items = [];
      state.currentPage = 1;
      state.totalItems = 0;
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
        const newItems = action.payload.items.filter(
          newItem =>
            !state.items.some(existingItem => existingItem.id === newItem.id)
        );
        state.items = [...state.items, ...newItems];
        state.totalItems = action.payload.total;
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

export const { clearTrucks, setCurrentPage } = trucksSlice.actions;
export const trucksReducer = trucksSlice.reducer;
