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
    <View className="flex-row gap-1">
      {starsList.map((star, i) => {
        if (star)
          return <View key={i} className="h-3 w-3 bg-black rounded-full" />;
        else
          return <View key={i} className="h-3 w-3 bg-gray-400 rounded-full" />;
      })}
    </View>
  );
}
