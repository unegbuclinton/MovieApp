import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import homeReducer from './components/features/Home/homeSlice';
import movieReducer from './components/features/Movie/MovieSlice';
import userReducer from './components/features/redux/UserData';

import paymentReducer from './components/features/redux/Payment';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  payment: paymentReducer,
  user: userReducer,
  home: homeReducer,
  movie: movieReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
