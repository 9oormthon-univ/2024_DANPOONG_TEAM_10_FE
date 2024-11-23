import { configureStore } from '@reduxjs/toolkit';
import festivalReducer from './festivalSlice';
import reviewReducer from './reviewSlice';

const store = configureStore({
  reducer: { festivalData: festivalReducer, reviewData: reviewReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
