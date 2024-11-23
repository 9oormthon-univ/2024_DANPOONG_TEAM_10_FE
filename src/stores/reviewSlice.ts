import { WritableDraft } from 'immer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewType } from '@/utils/Types';

const initialState: ReviewType[] = [
  {
    profile:
      'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww',
    nickname: '김유저',
    stars: 4,
    content: '너무 재미있는 해커톤이었습니다.',
    contentImage: [
      'https://plus.unsplash.com/premium_photo-1673697239936-c2599b0b0498?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3',
    ],
    likes: 4,
    isLiked: true,
  },
  {
    profile:
      'https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    nickname: '박유저',
    stars: 5,
    content:
      '아주 즐거웠고 가족들과 행복한 시간 보냈습니다. 행사장에 계시는 모든 스텝분들이 정말 친절하셨습니다. 중간중간 진행한 공연도 ...',
    contentImage: [
      'data:image/jpeg;base64,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',
    ],
    likes: 5,
    isLiked: false,
  },
  {
    profile:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBmYWNlc3xlbnwwfHwwfHx8MA%3D%3D',
    nickname: '신유저',
    stars: 3,
    content:
      '아주 즐거웠고 가족들과 행복한 시간 보냈습니다. 행사장에 계시는 모든 스텝분들이 정말 친절하셨습니다. 중간중간 진행한 공연도 ...',
    contentImage: [],
    likes: 1,
    isLiked: false,
  },
];

const setReview = (
  state: WritableDraft<ReviewType[]>,
  action: PayloadAction<{ newState: ReviewType[] }>
) => {
  const { newState } = action.payload;
  state = newState;
};

export const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState,
  reducers: {
    setReview,
  },
});

export default reviewSlice.reducer;
export const { setReview: setReviewAction } = reviewSlice.actions;
