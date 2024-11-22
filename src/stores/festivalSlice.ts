import { WritableDraft } from 'immer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FestivalType = {
  festival: string;
};

const initialState = {
  festival: '무슨무슨 축제',
};

const setFestival = (
  state: WritableDraft<FestivalType>,
  action: PayloadAction<{ festival: string }>
) => {
  const { festival } = action.payload;
  state.festival = festival;
};

export const festivalSlice = createSlice({
  name: 'festivalSlice',
  initialState,
  reducers: {
    setFestival,
  },
});

export default festivalSlice.reducer;
export const { setFestival: setFestivalAction } = festivalSlice.actions;
