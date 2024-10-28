import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoritesReducer } from './favorites/slice';
import { filterReducer } from './filter/slice';
import { trucksReducer } from './trucks/slice';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

const filterPersistConfig = {
  key: 'filter',
  storage,
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    trucks: trucksReducer,
    filter: persistReducer(filterPersistConfig, filterReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
