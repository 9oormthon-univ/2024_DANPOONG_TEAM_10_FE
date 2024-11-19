import Hr from '@/components/Hr';
import Stars from '@/components/Stars';
import FontText from '@/components/theme/FontText';
import { useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import Map from './Map';
import CustomMap from './CustomMap';

type ReviewType = {
  profile: string;
  nickname: string;
  stars: number;
  content: string;
};

export default function Detail() {
  const [reviewList, setReviewList] = useState<ReviewType[]>([]);

  const fetchData = async () => {
    setReviewList([]);
  };

  useEffect(() => {
    setReviewList([
      {
        profile: 'asdojf',
        nickname: 'user',
        stars: 3,
        content: '재미있었습니다.',
      },
      {
        profile: 'asdojf',
        nickname: 'user',
        stars: 2,
        content: '재미있었습니다.',
      },
      {
        profile: 'asdojf',
        nickname: 'user',
        stars: 5,
        content: '재미있었습니다.',
      },
      {
        profile: 'asdojf',
        nickname: 'user',
        stars: 5,
        content: '재미있었습니다.',
      },
      {
        profile: 'asdojf',
        nickname: 'user',
        stars: 5,
        content: '재미있었습니다.',
      },
      {
        profile: 'asdojf',
        nickname: 'user',
        stars: 5,
        content: '재미있었습니다.',
      },
    ]);
  }, []);

  return (
    <View className="flex-1">
      <ScrollView>
        <View className="flex-1 p-5 min-h-72">
          <FontText>축제 지도</FontText>
          <Map />
        </View>
        <Hr />
        <View className="flex-1 p-5 min-h-32">
          <FontText>방문자 리뷰</FontText>
          <View className="flex-1">
            <ScrollView horizontal contentContainerStyle={{ gap: 20 }}>
              {reviewList.length !== 0 &&
                reviewList.map((review, i) => (
                  <View className="border-2 rounded-xl p-5" key={i}>
                    <View className="flex-row">
                      <View className="h-10 w-10 bg-black rounded-full" />
                      <FontText>{review.nickname}</FontText>
                    </View>
                    <Stars count={review.stars} />
                    <FontText>{`"${review.content}"`}</FontText>
                  </View>
                ))}
            </ScrollView>
          </View>
        </View>
        <Hr />
        <View className="flex-1 p-5 min-h-72">
          <FontText>공연 타임테이블</FontText>
        </View>
        <Hr />
        <View className="flex-1 p-5 min-h-72">
          <FontText>커스텀 지도?</FontText>
          <CustomMap />
        </View>
      </ScrollView>
    </View>
  );
}
