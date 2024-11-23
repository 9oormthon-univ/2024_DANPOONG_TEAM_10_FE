import { WritableDraft } from 'immer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FestivalData } from '@/utils/Types';

const initialState: FestivalData = {
  title: '구름톤 유니브 3기 단풍톤',
  subTitle: '카카오 AI 캠퍼스',
  poster: '',
  status: true,
  date: '2024.11.23 ~ 2024.11.24',
  describe:
    '단풍톤은 구름톤 유니브 3기 소속 대학 47개, 400여명의 미르미가 함께 모여 가을에 진행하는 해커톤입니다.',
  location: '경기도 용인시 수지구 오수로96번길 7',
  latitude: 37.35174165739167,
  longitude: 127.07188065701887,
};

const setFestival = (
  state: WritableDraft<FestivalData>,
  action: PayloadAction<{ newState: FestivalData }>
) => {
  const { newState } = action.payload;
  state = newState;
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
