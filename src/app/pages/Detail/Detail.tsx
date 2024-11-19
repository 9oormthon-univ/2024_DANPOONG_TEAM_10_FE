import Hr from '@/components/Hr';
import Stars from '@/components/Stars';
import FontText from '@/components/theme/FontText';
import { useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import Map from './Map';
import CustomMap from './CustomMap';
import { useRouter } from 'expo-router';
import Profile from '@/components/Profile';
import Header from '@/components/layouts/Header';

type ReviewType = {
  profile: string;
  nickname: string;
  stars: number;
  content: string;
};

export default function Detail() {
  const [reviewList, setReviewList] = useState<ReviewType[]>([]);
  const router = useRouter();

  // 데이터 불러오기
  const fetchData = async () => {
    setReviewList([]);
  };

  // 더미데이터 입력
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

  // 리뷰 페이지로 이동
  const goReview = () => {
    router.push('/pages/Review');
  };

  return (
    <View className="flex-1">
      <Header left={<FontText>{'< Header'}</FontText>} />
      <ScrollView>
        <View className="flex-1 p-5 min-h-72">
          <FontText>축제 지도</FontText>
          <Map />
        </View>
        <Hr />
        <View className="flex-1 p-5 min-h-32">
          <TouchableOpacity className="py-4" onPress={goReview}>
            <FontText>방문자 리뷰</FontText>
          </TouchableOpacity>
          <View className="flex-1">
            <ScrollView horizontal contentContainerStyle={{ gap: 20 }}>
              {reviewList.length !== 0 &&
                reviewList.map((review, i) => (
                  <View className="border-2 rounded-xl p-3 gap-2" key={i}>
                    <Profile
                      image={review.profile}
                      nickname={review.nickname}
                    />
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
