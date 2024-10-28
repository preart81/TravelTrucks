import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { equipmentOptions } from '../../js/utils';
import {
  selectFilterEquipment,
  selectFilterLocation,
  selectFilterVehicleType,
} from '../filter/selectors';
import { clearTrucks } from './slice';

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
  async (_, thunkAPI) => {
    // Очищаємо попередні результати перед новим запитом
    thunkAPI.dispatch(clearTrucks());

    try {
      // отримуємо значення фільтрів зі стора
      const state = thunkAPI.getState();
      const location = selectFilterLocation(state);
      const equipment = selectFilterEquipment(state);
      const vehicleType = selectFilterVehicleType(state);

      // Створюємо об'єкт параметрів
      const params = {};
      if (location) params.location = location;
      // if (equipment) params.equipment = equipment;
      if (equipment && equipment.length > 0) {
        equipment.map(option => {
          params[equipmentOptions.find(e => e.name === option)?.parameter] =
            equipmentOptions.find(e => e.name === option)?.filter;
        });
      }
      if (vehicleType) params.form = vehicleType;

      // Виконуємо запит з параметрами
      const res = await axios.get('/', { params });
      return res.data.items;
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
