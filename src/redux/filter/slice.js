import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    location: '',
    equipment: '',
    vehicleType: '',
  },
  reducers: {
    setFilterLocation: (state, action) => {
      state.location = action.payload;
    },
    setFilterEquipment: (state, action) => {
      state.equipment = action.payload;
    },
    setFilterVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    resetFilters: state => {
      state.location = '';
      state.equipment = '';
      state.vehicleType = '';
    },
  },
});

export const { setFilterLocation, setFilterEquipment, setFilterVehicleType, resetFilters } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
