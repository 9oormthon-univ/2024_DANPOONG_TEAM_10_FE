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
import Title from '@/components/theme/TitleText';

type ReviewType = {
  profile: string;
  nickname: string;
  stars: number;
  content: string;
};

// 축제 상세 페이지
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
        content: '재미있었습니다.재미있었습니다.재미있었습니다.',
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
    router.push('/pages/Review/Review');
  };

  return (
    <View className="flex-1">
      <Header
        left={<Title>{'< 축제 이름'}</Title>}
        right={
          <View className="flex-row gap-3">
            <TouchableOpacity className="h-10 w-10 bg-gray-500 rounded-full"></TouchableOpacity>
            <TouchableOpacity className="h-10 w-10 bg-gray-500 rounded-full"></TouchableOpacity>
          </View>
        }
      />
      <ScrollView>
        <View className="flex-1 p-5 min-h-72">
          <Map />
        </View>
        <Hr />
        <View className="flex-1 py-5 min-h-32 gap-4">
          <TouchableOpacity className="px-5" onPress={goReview}>
            <Title>{'방문자 리뷰 >'}</Title>
          </TouchableOpacity>
          <View className="flex-1">
            <ScrollView
              horizontal
              contentContainerStyle={{
                gap: 20,
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
            >
              {reviewList.length !== 0 &&
                reviewList.map((review, i) => (
                  // 리뷰 카드
                  <View
                    className="w-[155] h-[100] shadow bg-white rounded-xl p-3 gap-2"
                    key={i}
                  >
                    <Profile
                      image={review.profile}
                      nickname={review.nickname}
                    />
                    <Stars count={review.stars} />
                    <FontText
                      numberOfLines={1}
                    >{`"${review.content}"`}</FontText>
                  </View>
                ))}
            </ScrollView>
          </View>
        </View>
        <Hr />
        <View className="flex-1 p-5 min-h-72 gap-4">
          <Title>타임테이블</Title>
        </View>
        <Hr />
        <View className="flex-1 p-5 min-h-72 gap-4">
          <Title>행사 안내</Title>
          <CustomMap />
        </View>
      </ScrollView>
    </View>
  );
}
