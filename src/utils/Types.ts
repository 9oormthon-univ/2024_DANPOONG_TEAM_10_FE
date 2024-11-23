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

export type DropDownItems = { label: string; value: string };

export type FestivalData = {
  title: string;
  subTitle: string;
  poster: string;
  status: boolean;
  date: string;
  describe: string;
  location: string;
  latitude: number;
  longitude: number;
};
