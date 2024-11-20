import MapIcon from '@/components/MapIcon';
import FontText from '@/components/theme/FontText';
import { View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

export default function Main() {

  return (
    <View className='flex-row items-center mt-11 px-5'>
        <View className='mr-4'>
       <MapIcon/>
       </View>
       <View className='mr-2'>
        <FontText style={{fontSize:16, fontWeight:800}}>도 이름</FontText>
        </View>
        <Entypo name="chevron-down" size={20} color="#1B1D1F" />    </View>
  );
}
