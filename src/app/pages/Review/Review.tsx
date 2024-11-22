import Hr from '@/components/Hr';
import Header from '@/components/layouts/Header';
import Stars from '@/components/Stars';
import FontText from '@/components/theme/FontText';
import Title from '@/components/theme/TitleText';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
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
    // 리뷰 개수 50개 까지만 불러오기
    if (reviewList.length >= 50) return;

    // 데이터 추가로 불러오기
    setReviewList((prev) => {
      const temp = [...prev];
      temp.push({
        profile: 'image',
        nickname: '닉네임',
        stars: 3,
        content:
          '리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글',
        contentImage: ['image'],
        likes: 333,
        isLiked: true,
      });
      return temp;
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // 페이지 상단에 들어갈 컴포넌트 랜더링
  const renderHeader = () => {
    return (
      <>
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
      </>
    );
  };

  // 리뷰 카드로 들어갈 컴포넌트 랜더링
  const renderItem = ({ item, index }: { item: ReviewType; index: number }) => (
    <View className="p-5 gap-5" key={index}>
      <ReviewCard
        review={item}
        // 좋아요 버튼 클릭 헨들러
        onLikeClick={(isLike) => {
          onLikeClick(index, isLike);
        }}
      />
      {index < reviewList.length - 1 ? (
        <View className="w-full h-[1] bg-gray-500" />
      ) : null}
    </View>
  );

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
        <FlatList
          data={reviewList} // 리뷰 데이터
          renderItem={renderItem} // 리뷰 카드
          keyExtractor={(item, index) => index.toString()} // 키
          ListHeaderComponent={renderHeader} // 상단에 띄울 컴포넌트
          onEndReached={fetchData} // 데이터 로드 함수
          onEndReachedThreshold={0.5} // 스크롤 50%에서 데이터 로드
        />
      </View>
    </View>
  );
}
