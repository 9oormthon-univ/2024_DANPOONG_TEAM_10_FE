import { configureStore } from '@reduxjs/toolkit';
import festivalReducer from './festivalSlice';

const store = configureStore({
  reducer: { festivalData: festivalReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
