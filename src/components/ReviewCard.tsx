import { View, TouchableOpacity, ScrollView } from 'react-native';
import FontText from './theme/FontText';
import Stars from './Stars';
import { ReviewType } from '@/utils/Types';
import { Image } from 'expo-image';
import Entypo from '@expo/vector-icons/Entypo';

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
            <View className="h-16 w-16 bg-black rounded-full overflow-hidden">
              <Image
                style={{ width: '100%', height: '100%' }}
                source={{ uri: review.profile }}
              />
            </View>
            <View className="gap-2">
              <FontText className="text-2xl font-bold">
                {review.nickname}
              </FontText>
              <View className="flex-row gap-2 items-center">
                <Stars count={review.stars} />
                <FontText>{review.date}</FontText>
              </View>
            </View>
          </View>
        </View>
        {/* 더보기 */}
        {/* <TouchableOpacity>
          <FontText>...</FontText>
        </TouchableOpacity> */}
      </View>
      {/* 내용 */}
      <FontText>{review.content}</FontText>

      {/* 이미지들 */}
      <ScrollView horizontal>
        {review.contentImage.length !== 0 &&
          review.contentImage.map((image, i) => (
            <View
              key={i}
              className="h-60 w-60 mr-5 bg-gray-300 rounded-xl overflow-hidden"
            >
              <Image
                style={{ width: '100%', height: '100%' }}
                source={{ uri: image }}
              />
            </View>
          ))}
      </ScrollView>
      {/* 좋야오 버튼 */}
      <View className="flex-row items-center">
        {review.isLiked ? (
          <TouchableOpacity
            onPress={() => {
              console.log(11);
              onLikeClick(false);
            }}
            className="h-10 w-10 justify-center"
          >
            <Entypo name="heart" size={20} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              console.log(11);
              onLikeClick(true);
            }}
            className="h-10 w-10 justify-center"
          >
            <Entypo name="heart-outlined" size={20} color="black" />
          </TouchableOpacity>
        )}
        <FontText>{`${review.likes}`}</FontText>
      </View>
    </View>
  );
}
