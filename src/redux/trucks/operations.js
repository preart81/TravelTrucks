import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchTrucks = createAsyncThunk(
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
