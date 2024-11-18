import { useEffect } from 'react';
import { Image, View } from 'react-native';

// 리뷰 별점
export default function Stars({ count }: { count: number }) {
  // 갯수에 맞춰서 별점 리스트 생성
  const starsList = Array.from({ length: 5 }).map((_, i) => {
    if (i < count) return true;
    else return false;
  });

  return (
    <View className="flex-row">
      {starsList.map((star, i) => {
        if (star) return <Image key={i} />;
        else return <Image key={i} />;
      })}
    </View>
  );
}