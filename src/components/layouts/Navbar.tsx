import { Image, TouchableOpacity, View } from 'react-native';
import FontText from '../theme/FontText';
import { useRouter } from 'expo-router';

// 바닥 네비바
export default function Navbar() {
  const router = useRouter();

  const onEventPageClick = () => {
    router.replace('/pages/Event');
  };
  const onLikeClick = () => {
    router.replace('/pages/LikePage');
  };
  const onHomeClick = () => {
    router.replace('/pages/Main');
  };
  const onCalendarClick = () => {
    router.replace('/pages/CalendarPage');
  };
  const onMyPageClick = () => {
    router.replace('/pages/MyPage');
  };

  return (
    <View className="h-full w-full flex-row justify-between bg-gray-300 px-2">
      <TouchableOpacity
        onPress={onEventPageClick}
        className="flex-1 items-center justify-center"
      >
        <Image />
        <FontText>이벤트</FontText>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onLikeClick}
        className="flex-1 items-center justify-center"
      >
        <Image />
        <FontText>좋아요</FontText>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onHomeClick}
        className="flex-1 items-center justify-center"
      >
        <Image />
        <FontText>홈</FontText>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onCalendarClick}
        className="flex-1 items-center justify-center"
      >
        <Image />
        <FontText>달력</FontText>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onMyPageClick}
        className="flex-1 items-center justify-center"
      >
        <Image />
        <FontText>내 프로필</FontText>
      </TouchableOpacity>
    </View>
  );
}
