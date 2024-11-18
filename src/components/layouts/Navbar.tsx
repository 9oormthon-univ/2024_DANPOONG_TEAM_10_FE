import { Image, TouchableOpacity, View } from 'react-native';
import FontText from '../theme/FontText';

export default function Navbar() {
  return (
    <View className="h-full w-full flex-row justify-between bg-gray-300 px-10">
      <TouchableOpacity className="flex-1 items-center justify-center">
        <Image />
        <FontText>홈</FontText>
      </TouchableOpacity>
      <TouchableOpacity className="flex-1 items-center justify-center">
        <Image />ㄴ<FontText>좋아요</FontText>
      </TouchableOpacity>
      <TouchableOpacity className="flex-1 items-center justify-center">
        <Image />
        <FontText>달력</FontText>
      </TouchableOpacity>
      <TouchableOpacity className="flex-1 items-center justify-center">
        <Image />
        <FontText>내 프로필</FontText>
      </TouchableOpacity>
    </View>
  );
}
