import Header from '@/components/layouts/Header';
import Navbar from '@/components/layouts/Navbar';
import FontText from '@/components/theme/FontText';
import { Slot } from 'expo-router';
import { View } from 'react-native';

export default function PagesLayout() {
  return (
    <View className="flex-1">
      {/* 헤더 들어가는 부분 */}
      {/* <View className="h-20 mt-20">
        <Header left={<FontText>{'< Header'}</FontText>} />
      </View> */}
      {/* 멍청하게 헤더를 수정할 수 없게 해놔서 지우기 */}

      {/* Slot : 하위 페이지 들어가는 부분 */}
      <View className="flex-1">
        <Slot />
      </View>

      {/* 네비바 들어가는 부분 */}
      <View className="h-20">
        <Navbar />
      </View>
    </View>
  );
}
