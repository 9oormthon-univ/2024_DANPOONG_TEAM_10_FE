import { View, TouchableOpacity, Image, ScrollView } from 'react-native';
import FontText from './theme/FontText';
import Stars from './Stars';
import { ReviewType } from '@/utils/Types';

interface ReviewCardProps {
  review: ReviewType;
  onLikeClick: (isLike: boolean) => void;
}

//리뷰 페이지 카드
export default function ReviewCard({ review, onLikeClick }: ReviewCardProps) {
  return (
    <View className="gap-5">
      {/* 정보들 */}
      <View className="flex-row justify-between">
        {/* 프로필 */}
        <View className="flex-row gap-5">
          <View className="flex-row gap-3 items-center">
            <View className="h-16 w-16 bg-black rounded-full" />
            <View className="gap-2">
              <FontText className="text-2xl font-bold">
                {review.nickname}
              </FontText>
              <View className="flex-row gap-2">
                <Stars count={review.stars} />
                <FontText>2024.11.23</FontText>
              </View>
            </View>
          </View>
        </View>
        {/* 더보기 */}
        <TouchableOpacity>
          <FontText>...</FontText>
        </TouchableOpacity>
      </View>
      {/* 내용 */}
      <FontText>{review.content}</FontText>

      {/* 이미지들 */}
      <ScrollView horizontal>
        {review.contentImage.length !== 0 &&
          review.contentImage.map((image, i) => (
            <View key={i} className="h-60 w-60 mr-5 bg-gray-300 rounded-xl">
              <Image />
            </View>
          ))}
      </ScrollView>
      {/* 좋야오 버튼 */}
      <View className="flex-row justify-between">
        <View className="flex-row gap-3">
          {review.isLiked ? (
            <TouchableOpacity
              onPress={() => {
                onLikeClick(false);
              }}
              className="h-5 w-5 border-2 bg-black"
            >
              <Image />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                onLikeClick(true);
              }}
              className="h-5 w-5 border-2"
            >
              <Image />
            </TouchableOpacity>
          )}
          <FontText>{`${review.likes}`}</FontText>
        </View>
      </View>
    </View>
  );
}
