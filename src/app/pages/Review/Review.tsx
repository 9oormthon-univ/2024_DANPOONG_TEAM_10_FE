import Header from '@/components/layouts/Header';
import Profile from '@/components/Profile';
import Stars from '@/components/Stars';
import FontText from '@/components/theme/FontText';
import Title from '@/components/theme/TitleText';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';

type ReviewType = {
  profile: string;
  nickname: string;
  stars: number;
  content: string;
  contentImage?: string;
  likes: number;
  isLiked: boolean;
};

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
        contentImage: 'image',
        likes: 333,
        isLiked: true,
      },
      {
        profile: 'image',
        nickname: '닉네임',
        stars: 3,
        content: '리뷰글 리뷰글',
        likes: 333,
        isLiked: false,
      },
      {
        profile: 'image',
        nickname: '닉네임',
        stars: 3,
        content: '리뷰글 리뷰글',
        contentImage: 'image',
        likes: 333,
        isLiked: false,
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
          <View className="m-7 h-32 shadow bg-white rounded-xl items-center justify-center gap-3">
            <Title>이 축제에 방문하셨나요?</Title>
            <TouchableOpacity
              onPress={goWriteReview}
              className="bg-cyan-950 py-2 px-5 rounded-full"
            >
              <FontText className="text-white">리뷰 작성하기</FontText>
            </TouchableOpacity>
          </View>
          {reviewList.length !== 0 &&
            reviewList.map((review, i) => (
              // 리뷰 카드
              <View
                key={i}
                className="shadow bg-white rounded-xl mx-7 mb-7 p-3 gap-3"
              >
                <Profile image={review.profile} nickname={review.nickname} />
                {review.contentImage ? (
                  <View className="min-h-60 bg-gray-300 rounded-xl">
                    <Image />
                  </View>
                ) : null}
                <Stars count={3} />
                <FontText>{review.content}</FontText>
                <View className="flex-row justify-between">
                  <View className="flex-row gap-3">
                    {review.isLiked ? (
                      <TouchableOpacity
                        onPress={() => {
                          onLikeClick(i, false);
                        }}
                        className="h-5 w-5 border-2 bg-black"
                      >
                        <Image />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          onLikeClick(i, true);
                        }}
                        className="h-5 w-5 border-2"
                      >
                        <Image />
                      </TouchableOpacity>
                    )}
                    <FontText>{`${review.likes}`}</FontText>
                  </View>
                  <TouchableOpacity>
                    <FontText>...</FontText>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}
