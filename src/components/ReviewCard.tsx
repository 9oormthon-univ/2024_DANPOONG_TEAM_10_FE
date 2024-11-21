import { View, TouchableOpacity, Image } from 'react-native';
import FontText from './theme/FontText';
import Stars from './Stars';
import { ReviewType } from '@/utils/Types';

interface ReviewCardProps {
  review: ReviewType;
  onLikeClick: Function;
  index: number;
  nickname: string;
  stars: number;
}

//리뷰 페이지 카드
export default function ReviewCard({
  review,
  onLikeClick,
  index,
  nickname,
  stars,
}: ReviewCardProps) {
  return (
    <View className="gap-5">
      {/* 정보들 */}
      <View className="flex-row justify-between">
        <View className="flex-row gap-5">
          {/* 프로필 */}
          <View className="flex-row gap-3 items-center">
            <View className="h-16 w-16 bg-black rounded-full" />
            <View className="gap-2">
              <FontText className="text-2xl font-bold">{nickname}</FontText>
              <View className="flex-row gap-2">
                <Stars count={stars} />
                <FontText>2024.11.23</FontText>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <FontText>...</FontText>
        </TouchableOpacity>
      </View>
      {/* 이미지 */}
      <View>
        {review.contentImage.length !== 0 &&
          review.contentImage.map((image, i) => (
            <View key={i} className="min-h-60 bg-gray-300 rounded-xl">
              <Image />
            </View>
          ))}
      </View>
      {/* 내용 */}
      <FontText>{review.content}</FontText>
      {/* 좋야오 버튼 */}
      <View className="flex-row justify-between">
        <View className="flex-row gap-3">
          {review.isLiked ? (
            <TouchableOpacity
              onPress={() => {
                onLikeClick(index, false);
              }}
              className="h-5 w-5 border-2 bg-black"
            >
              <Image />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                onLikeClick(index, true);
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
