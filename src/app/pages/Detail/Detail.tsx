import Hr from '@/components/Hr';
import Stars from '@/components/Stars';
import FontText from '@/components/theme/FontText';
import { useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import Map from './Map';

type ReviewType = {
  profile: string;
  nickname: string;
  stars: number;
  content: string;
};

export default function Detail() {
  const [reviewList, setReviewList] = useState<ReviewType[]>([]);

  useEffect(() => {
    setReviewList([
      { profile: 'asdojf', nickname: 'user', stars: 3, content: 'soijd' },
      { profile: 'asdojf', nickname: 'user', stars: 2, content: 'soijd' },
      { profile: 'asdojf', nickname: 'user', stars: 5, content: 'soijd' },
    ]);
  }, []);

  return (
    <View className="flex-1">
      <View className="flex-1">
        <Map />
      </View>
      <Hr />
      <View className="flex-1">
        <FontText>방문자 리뷰</FontText>
        <View className="flex-1">
          <ScrollView horizontal>
            {reviewList.length !== 0 &&
              reviewList.map((review, i) => (
                <View className="w-4/5" key={i}>
                  <View className="flex-row">
                    <Image />
                    <FontText>{review.nickname}</FontText>
                  </View>
                  <Stars count={review.stars} />
                  <FontText>{review.content}</FontText>
                </View>
              ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
