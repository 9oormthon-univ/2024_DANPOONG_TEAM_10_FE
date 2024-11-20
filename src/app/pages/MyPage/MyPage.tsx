
import FontText from '@/components/theme/FontText';
import { Alert, Image, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import Hr from '@/components/Hr';
import { router } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

export default function MyPage() {

  return (
    <SafeAreaView>
     <ScrollView> 
            <View className="w-full p-3 justify-center mt-4 mb-3 ml-5" >
                <View className='flex-row items-center gap-4'>
                    <Image source={require('@/assets/danpong.png')}/>
                    <View className='flex-col gap-2'>
                        <FontText color="#000" style={{fontSize:20, fontWeight:800}}>닉네임</FontText>
                        <FontText color="#000" style={{fontSize:12}}>카카오로그인</FontText>
                            <TouchableOpacity
                            className="w-30 bg-gray-100 border-2 border-gray-200 items-center rounded-xl px-5 py-1"
                            onPress={() => Alert.alert("상세페이지")}>
                                <FontText color="#1B1D1F" style={{fontSize:16, fontWeight:700}}>프로필 관리</FontText>
                            </TouchableOpacity>
                        
                        
                    </View>
                </View>
            </View>
            <Hr />
            {/* 내용 */}
           <View className='w-full px-5 gap-6 mt-10'>
            <View className='flex-row justify-between'>
             <FontText style={{fontSize:20, fontWeight:800}}>알람 설정</FontText>
             <Entypo name="chevron-right" size={16} color="#1B1D1F" />    
            </View> 
            <View className='flex-row justify-between'>
             <FontText style={{fontSize:20, fontWeight:800}}>개인 정보 관리</FontText>
             <Entypo name="chevron-right" size={16} color="#1B1D1F" />    
            </View> 
            <View className='flex-row justify-between'>
             <FontText style={{fontSize:20, fontWeight:800}}>고객 센터</FontText>
             <Entypo name="chevron-right" size={16} color="#1B1D1F" />    
            </View> 
            <View className='flex-row justify-between'>
             <FontText style={{fontSize:20, fontWeight:800}}>제휴 문의</FontText>
             <Entypo name="chevron-right" size={16} color="#1B1D1F" />    
            </View> 
            <View className='flex-row justify-between'>
             <FontText style={{fontSize:20, fontWeight:800}}>약관 및 정책</FontText>
             <Entypo name="chevron-right" size={16} color="#1B1D1F" />    
            </View> 
            <View className='flex-row justify-between'>
             <FontText style={{fontSize:20, fontWeight:800}}>공지 사항</FontText>
             <Entypo name="chevron-right" size={16} color="#1B1D1F" />    
            </View>      
           </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}
