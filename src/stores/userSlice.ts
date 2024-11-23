import { WritableDraft } from 'immer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '@/utils/Types';

const initialState: UserType = {
  nickname: '양유저',
  birth: '2000.11.11',
  profile:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB570VImghxEPaoDREfmx8k2iPsKBLULHk_AvnX9JPPM_R10Gdav83CTTEc1b3Bk6q_Ic&usqp=CAU',
};

const setUser = (
  state: WritableDraft<UserType>,
  action: PayloadAction<{ newState: UserType }>
) => {
  const { newState } = action.payload;
  state = newState;
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser,
  },
});

export default userSlice.reducer;
export const { setUser: setUserAction } = userSlice.actions;
