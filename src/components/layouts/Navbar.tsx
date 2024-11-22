import { Image, TouchableOpacity, View } from 'react-native';
import FontText from '../theme/FontText';
import { useRouter } from 'expo-router';

// 바닥 네비바
export default function Navbar() {
  const router = useRouter();

  const onHomeClick = () => {
    router.replace('/pages/Main');
  };
  const onLikeClick = () => {
    router.replace('/pages/LikePage');
  };
  const onCalendarClick = () => {
    router.replace('/pages/Main');
  };
  const onProfileClick = () => {
    router.replace('/pages/Main');
  };
  const onMoreInfoClick = () => {
    router.replace('/pages/Main');
  };

  return (
    <View className="h-full w-full flex-row justify-between bg-gray-300 px-2">
      <TouchableOpacity
        onPress={onHomeClick}
        className="flex-1 items-center justify-center"
      >
        <Image />
        <FontText>홈</FontText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onLikeClick}
        className="flex-1 items-center justify-center"
      >
        <Image />
        <FontText>좋아요</FontText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onCalendarClick}
        className="flex-1 items-center justify-center"
      >
        <Image />
        <FontText>달력</FontText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onProfileClick}
        className="flex-1 items-center justify-center"
      >
        <Image />
        <FontText>내 프로필</FontText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onMoreInfoClick}
        className="flex-1 items-center justify-center"
      >
        <Image />
        <FontText>더보기</FontText>
      </TouchableOpacity>
    </View>
  );
}
