import { View } from 'react-native';
import FontText from './theme/FontText';
import Stars from './Stars';

interface ProfileProps {
  image: string;
  nickname: string;
  stars: number;
}

// 유저 프로필 이미지, 닉네임 묶음
export default function Profile({ image, nickname, stars }: ProfileProps) {
  return (
    <View className="flex-row gap-3 items-center">
      <View className="h-10 w-10 bg-black rounded-full" />
      <View className="gap-2">
        <FontText className="font-bold">{nickname}</FontText>
        <Stars count={stars} />
      </View>
    </View>
  );
}
