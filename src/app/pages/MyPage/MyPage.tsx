import React, { useState } from 'react';
import {TouchableOpacity, Alert, Image, SafeAreaView, ScrollView, View } from 'react-native';
import FontText from '@/components/theme/FontText';
import Hr from '@/components/Hr';
import Entypo from '@expo/vector-icons/Entypo';
import ToggleButton from './ToggleButton'; // Import the ToggleButton component
import { router } from 'expo-router';

export default function MyPage() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = (value: boolean) => {
      setIsOn(value);
    };
  

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full p-3 justify-center mt-4 mb-3 ml-5">
          <View className="flex-row items-center gap-4">
            <Image className='w-21 h-21'source={require('@/assets/danpong.png')} />
            <View className="flex-col gap-2">
              <FontText style={{ fontSize: 20, fontWeight: '800' }}>
                닉네임
              </FontText>
              <FontText style={{ fontSize: 12 }}>
                카카오로그인
              </FontText>
              <TouchableOpacity
                className="w-30 bg-gray-50 border-2 border-gray-200 items-center rounded-xl px-5 py-1"
                onPress={() => router.push('pages/MyPage/MyPageDetail')}
              >
                <FontText className='text-[#1B1D1F]' style={{ fontSize: 16, fontWeight: '700' }}>
                  프로필 관리
                </FontText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Hr />
        <View className="w-full px-5 gap-6 mt-10">
          <View className="flex-row justify-between items-center">
            <View className='flex-col' >
            <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>알람 설정</FontText>
            <FontText className='text-[#9FA4A9]' style={{ fontSize: 14, fontWeight: '700' }}>푸시 알림을 설정합니다</FontText>
            </View>
            {/* Use ToggleButton component */}
            <ToggleButton isOn={isOn} onToggle={handleToggle} />
          </View>
          <View className="flex-row justify-between">
            <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>개인 정보 관리</FontText>
            <Entypo name="chevron-right" size={16} color="#1B1D1F" />
          </View>
          <View className="flex-row justify-between">
            <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>고객 센터</FontText>
            <Entypo name="chevron-right" size={16} color="#1B1D1F" />
          </View>
          <View className="flex-row justify-between">
            <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>제휴 문의</FontText>
            <Entypo name="chevron-right" size={16} color="#1B1D1F" />
          </View>
          <View className="flex-row justify-between">
            <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>약관 및 정책</FontText>
            <Entypo name="chevron-right" size={16} color="#1B1D1F" />
          </View>
          <View className="flex-row justify-between">
            <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>공지 사항</FontText>
            <Entypo name="chevron-right" size={16} color="#1B1D1F" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
