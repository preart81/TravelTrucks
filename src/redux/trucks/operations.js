import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getFilterParamsFromStore } from '../../js/utils';
import {
  selectFilterEquipment,
  selectFilterLocation,
  selectFilterVehicleType,
} from '../filter/selectors';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchAllTrucks = createAsyncThunk(
  'trucks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/');
      return res.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTrucks = createAsyncThunk(
  'trucks/fetchFiltered',
  async (page = 1, thunkAPI) => {
    // Очищаємо попередні результати перед новим запитом
    // thunkAPI.dispatch(clearTrucks());

    try {
      const state = thunkAPI.getState();
      const location = selectFilterLocation(state);
      const equipment = selectFilterEquipment(state);
      const vehicleType = selectFilterVehicleType(state);
      const itemsPerPage = state.trucks.itemsPerPage;

      const params = getFilterParamsFromStore({
        location,
        equipment,
        vehicleType,
      });

      params.page = page;
      params.limit = itemsPerPage;

      // Виконуємо запит з параметрами
      const res = await axios.get('/', { params });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOneTruck = createAsyncThunk(
  'trucks/fetchTruck',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
