import { View } from 'react-native';
import FontText from './theme/FontText';

interface ProfileProps {
  image: string;
  nickname: string;
}

// 유저 프로필 이미지, 닉네임 묶음
export default function Profile({ image, nickname }: ProfileProps) {
  return (
    <View className="flex-row gap-3 items-center">
      <View className="h-10 w-10 bg-black rounded-full" />
      <FontText>{nickname}</FontText>
    </View>
  );
}
