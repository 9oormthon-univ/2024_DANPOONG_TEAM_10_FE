export type TimelineData = { title: string; time: string };

export type ReviewType = {
  profile: string;
  nickname: string;
  stars: number;
  content: string;
  contentImage: string[];
  likes: number;
  isLiked: boolean;
};
