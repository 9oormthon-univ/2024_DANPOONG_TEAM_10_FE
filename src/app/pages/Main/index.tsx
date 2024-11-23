import MapIcon from '@/components/MapIcon';
import FontText from '@/components/theme/FontText';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Hr from '@/components/Hr';
import ImageSlider from './organism/ImageSlider';
import { router } from 'expo-router';
import { routeToScreen } from 'expo-router/build/useScreens';

export default function Main() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* 상단 */}
        <View className="flex-row items-center mt-11 px-5">
          <View className="mr-4">
            <MapIcon />
          </View>
          <View className="mr-2">
            <FontText style={{ fontSize: 16, fontWeight: 800 }}>
              도 이름
            </FontText>
          </View>
          <TouchableOpacity onPress={() => router.push('pages/Modal/MapModal')}>
            <Entypo name="chevron-down" size={16} color="#1B1D1F" />
          </TouchableOpacity>
        </View>
        <ScrollView className="px-5 mt-7 mb-7" horizontal={true}>
          <TouchableOpacity onPress={() => router.push('pages/Main/MainCity')}>
            <Image source={require('@/assets/city.png')} />
          </TouchableOpacity>
        </ScrollView>
        <Hr />

        {/* 내용 */}
        <View className="flex-row items-center mt-11 mb-5 px-5">
          <View className="mr-2">
            <FontText style={{ fontSize: 20, fontWeight: 800 }}>
              진행중인 축제
            </FontText>
          </View>
          <Entypo name="chevron-down" size={20} color="#1B1D1F" />
        </View>
        <ImageSlider />
        <Hr />
      </ScrollView>
    </SafeAreaView>
  );
}
