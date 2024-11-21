import Hr from '@/components/Hr';
import Header from '@/components/layouts/Header';
import Stars from '@/components/Stars';
import FontText from '@/components/theme/FontText';
import Title from '@/components/theme/TitleText';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { ReviewType } from '@/utils/Types';
import ReviewCard from '@/components/ReviewCard';

// 리뷰 페이지
export default function Review() {
  const router = useRouter();
  // 리뷰 리스트
  const [reviewList, setReviewList] = useState<ReviewType[]>([]);

  // 좋아요 버튼 클릭 헨들러
  const onLikeClick = (index: number, isLike: boolean) => {
    setReviewList((prev) => {
      const temp = [...prev];
      temp[index].isLiked = isLike;
      if (isLike) {
        temp[index].likes += 1;
      } else {
        temp[index].likes -= 1;
      }
      return temp;
    });
    // 좋아요 데이터 백앤드 연결
  };

  // 데이터 불러오기
  const fetchData = async () => {
    setReviewList([
      {
        profile: 'image',
        nickname: '닉네임',
        stars: 3,
        content:
          '리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글',
        contentImage: ['image'],
        likes: 333,
        isLiked: true,
      },
    ]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // 뒤로가기
  const goBack = () => {
    router.back();
  };

  // 리뷰 작성으로 이동
  const goWriteReview = () => {
    router.push('pages/Review/WriteReview');
  };

  return (
    <View className="flex-1">
      <Header
        left={
          <TouchableOpacity onPress={goBack}>
            <Title>{'< 방문자 리뷰'}</Title>
          </TouchableOpacity>
        }
      />
      <View className="flex-1">
        <ScrollView>
          {/* 리뷰 평점, 비율 */}
          <View className="flex-row py-5 items-center">
            <View className="flex-1 items-center gap-5">
              <FontText className="text-xl font-bold">방분자 총 평점</FontText>
              <FontText className="font-bold text-3xl">5.0</FontText>
              <Stars count={5} />
            </View>
            <View className="h-20 w-1 bg-gray-200" />
            <View className="flex-1 items-center">
              <FontText>평점 비율</FontText>
              <View></View>
            </View>
          </View>
          <Hr />

          {/* 리뷰 작성 */}
          <View className="p-5">
            <Title>전체 리뷰 3개</Title>
            <View className="flex-row justify-between items-center">
              <FontText className="font-bold">이 축제에 방문하셨나요?</FontText>
              <TouchableOpacity
                onPress={goWriteReview}
                className="bg-cyan-950 py-2 px-3 rounded-full"
              >
                <FontText className="text-white">{'리뷰 작성하기 >'}</FontText>
              </TouchableOpacity>
            </View>
            <View>
              <View></View>
            </View>
          </View>

          {/* 리뷰 리스트 */}
          {reviewList.length !== 0 &&
            reviewList.map((review, i) => (
              <View className="p-5 gap-5" key={i}>
                <ReviewCard
                  nickname={review.nickname}
                  stars={review.stars}
                  review={review}
                  onLikeClick={onLikeClick}
                  index={i}
                />
                {i < reviewList.length - 1 ? (
                  <View className="w-full h-[1] bg-gray-500" />
                ) : null}
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}
