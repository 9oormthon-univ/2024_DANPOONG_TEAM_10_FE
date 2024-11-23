import Hr from '@/components/Hr';
import Stars from '@/components/Stars';
import FontText from '@/components/theme/FontText';
import { useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import Map from './Map';
import CustomMap from './CustomMap';
import { useRouter } from 'expo-router';
import Header from '@/components/layouts/Header';
import Title from '@/components/theme/TitleText';
import Timeline from '@/components/Timeline';
import { TimelineData } from '@/utils/Types';
import FestStatus from '@/components/FestStatus';

type ReviewType = {
  profile: string;
  nickname: string;
  stars: number;
  content: string;
  image?: string;
};

// 축제 상세 페이지
export default function Detail() {
  const router = useRouter();
  const [reviewList, setReviewList] = useState<ReviewType[]>([]);
  const [timeline, setTimeline] = useState<TimelineData[]>([]);

  // 데이터 불러오기
  const fetchData = async () => {
    setReviewList([]);
  };

  // 더미데이터 입력
  useEffect(() => {
    // 리뷰 더미데이터
    setReviewList([
      {
        profile: 'asdojf',
        nickname: 'user',
        stars: 3,
        content:
          '아주 즐거웠고 가족들과 행복한 시간 보냈습니다. 행사장에 계시는 모든 스텝분들이 정말 친절하셨습니다. 중간중간 진행한 공연도 ...',
        image: 'sdjfiosdjfiosjd',
      },
      {
        profile: 'asdojf',
        nickname: 'user',
        stars: 3,
        content:
          '아주 즐거웠고 가족들과 행복한 시간 보냈습니다. 행사장에 계시는 모든 스텝분들이 정말 친절하셨습니다. 중간중간 진행한 공연도 ...',
        image: 'sdjfiosdjfiosjd',
      },
      {
        profile: 'asdojf',
        nickname: 'user',
        stars: 3,
        content:
          '아주 즐거웠고 가족들과 행복한 시간 보냈습니다. 행사장에 계시는 모든 스텝분들이 정말 친절하셨습니다. 중간중간 진행한 공연도 ...',
        image: 'sdjfiosdjfiosjd',
      },
      {
        profile: 'asdojf',
        nickname: 'user',
        stars: 3,
        content:
          '아주 즐거웠고 가족들과 행복한 시간 보냈습니다. 행사장에 계시는 모든 스텝분들이 정말 친절하셨습니다. 중간중간 진행한 공연도 ...',
        image: 'sdjfiosdjfiosjd',
      },
      {
        profile: 'asdojf',
        nickname: 'user',
        stars: 3,
        content:
          '아주 즐거웠고 가족들과 행복한 시간 보냈습니다. 행사장에 계시는 모든 스텝분들이 정말 친절하셨습니다. 중간중간 진행한 공연도 ...',
        image: 'sdjfiosdjfiosjd',
      },
    ]);
    // 타임라인 더미데이터
    setTimeline([
      { title: '참가자 입장', time: '~ 17:00' },
      { title: '개회식', time: '17:00 ~ 18:00' },
      { title: '저녁 식사', time: '18:00 ~ 19:00 A조 / 19:00 ~ 20:00 B조' },
      { title: '스프린트', time: '20:00 ~ 24:00' },
      { title: '야식 시간', time: '24:00 ~ 01:00' },
    ]);
  }, []);

  // 리뷰 페이지로 이동
  const goReview = () => {
    router.push('/pages/Review/Review');
  };

  return (
    <View className="flex-1">
      <Header
        left={<Title>{'< 축제 개요'}</Title>}
        right={
          <View className="flex-row gap-3">
            <TouchableOpacity className="h-10 w-10 bg-gray-500 rounded-full"></TouchableOpacity>
            <TouchableOpacity className="h-10 w-10 bg-gray-500 rounded-full"></TouchableOpacity>
          </View>
        }
      />
      <ScrollView>
        {/* 축재 정보 */}
        <View className="flex-1 flex-row p-5 gap-5">
          <View className="w-1/2 min-h-[220] bg-gray-200 rounded-xl overflow-hidden">
            <Image />
          </View>
          <View className="w-1/2 gap-2 pr-5">
            <View className="max-w-[120]">
              <FestStatus isOpen={true} />
            </View>
            <FontText className="text-xl font-bold">
              2023 거창 마당 대축제
            </FontText>
            <FontText>거창 스포츠파크</FontText>
            <FontText>2020-02-02 ~ 2023-03-03</FontText>
          </View>
        </View>
        <Hr />
        {/* 지도 */}
        <View className="flex-1 p-5 gap-5">
          <Title>위치 정보</Title>
          <View className="min-h-60 rounded-xl overflow-hidden bg-gray-200">
            <Map inPage />
          </View>
          <View className="min-h-60 bg-gray-200 rounded-xl">
            <FontText className="font-bold">인근 주차장</FontText>
            <FontText className="font-bold">대중교통</FontText>
          </View>
        </View>
        <Hr />
        {/* 날씨? */}
        {/* 방문자 리뷰 */}
        <View className="flex-1 py-5 min-h-32 gap-4">
          <TouchableOpacity
            className="px-5 flex-row items-center gap-2"
            onPress={goReview}
          >
            <Title>{`방문자 리뷰`}</Title>
            <FontText>{reviewList.length}</FontText>
            <FontText>{'>'}</FontText>
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
                    className="w-72 shadow bg-white rounded-xl p-3 gap-5"
                    key={i}
                  >
                    {/* 프로필 */}
                    <View className="flex-row gap-3 items-center">
                      <View className="h-16 w-16 bg-black rounded-full" />
                      <View className="gap-2">
                        <FontText className="text-2xl font-bold">
                          {review.nickname}
                        </FontText>
                        <Stars count={review.stars} />
                      </View>
                    </View>
                    {/* 이미지, 내용 */}
                    <View className="flex-1 flex-row gap-3">
                      {review.image && (
                        <View className="h-[84] w-[84] rounded-xl bg-gray-400"></View>
                      )}
                      <FontText
                        className="flex-1"
                        numberOfLines={5}
                      >{`"${review.content}"`}</FontText>
                    </View>
                  </View>
                ))}
            </ScrollView>
          </View>
        </View>
        <Hr />
        {/* 타임테이블 */}
        <View className="flex-1 p-5 min-h-72 gap-4">
          <View className="flex-row items-center gap-6">
            <Title>타임테이블</Title>
            <TouchableOpacity>
              <FontText>11월 23일</FontText>
            </TouchableOpacity>
          </View>
          <Timeline timelineData={timeline} />
        </View>
        <Hr />
        {/* 행사 안내 (커스텀 지도) */}
        <View className="flex-1 p-5 min-h-72 gap-4">
          <Title>행사 안내</Title>
          <View className=" min-h-60 rounded-xl overflow-hidden bg-gray-400 ">
            <CustomMap />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
