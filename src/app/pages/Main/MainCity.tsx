
import FontText from '@/components/theme/FontText';
import { Alert, Image, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Hr from '@/components/Hr';
import ImageSlider from './organism/ImageSlider';
import { router, Router } from 'expo-router';

export default function MainCity() {

  return (
    <SafeAreaView>
     <ScrollView>
            {/* 상단 */}
            <View className='flex-row items-center mt-11 px-5'>
                <TouchableOpacity 
                className='mr-4'
                onPress={()=>router.back()}>
                <Entypo name="chevron-left" size={16} color="#1B1D1F" />  
                </TouchableOpacity>
                <View className='mr-2'>
                    <FontText style={{fontSize:16, fontWeight:800}}>시 이름</FontText>
                </View> 
            </View>
                
            <TouchableOpacity
                className="w-3/5 bg-gray-600 rounded-2xl p-3 items-start mt-4 mb-3 ml-5"
                onPress={() => Alert.alert("단풍톤 교류방으로 이동합니다.")}
            >
                <View className='flex-row gap-4'>
                    <Image source={require('@/assets/danpong.png')}/>
                    <View className='flex-col'>
                        <FontText color="#F7F8F9" style={{fontSize:20, fontWeight:800}}>단풍톤 교류방</FontText>
                        <FontText color="#F7F8F9" style={{fontSize:12}}>실시간 대화 중</FontText>
                    </View>
                </View>
            </TouchableOpacity>
            <Hr />
            {/* 내용 */}
            <View className='flex-row items-center mt-11 mb-5 px-5'>
                <View className='mr-2'>
                    <FontText style={{fontSize:20, fontWeight:800}}>예정된 축제</FontText>
                </View>
            </View>
            <ImageSlider/>
            <View className='flex-row items-center mt-11 mb-5 px-5'>
                <View className='mr-2'>
                    <FontText style={{fontSize:20, fontWeight:800}}>진행중인 축제</FontText>
                </View>
            </View>
            <ImageSlider/>
            <Hr />
      </ScrollView>
    </SafeAreaView>
    
  );
}
