import { View } from 'react-native';
import { Image } from 'react-native';

export default function MapIcon() {
  return (
  <View className="relative"> 
  <View className='w-8 h-8 bg-[#F7F8F9] rounded-full'>
  <Image className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-7' source={require('@/assets/map-icon.png')} />
  </View>
  </View>
  );
}
