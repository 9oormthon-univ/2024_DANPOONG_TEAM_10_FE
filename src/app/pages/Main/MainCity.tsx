import React from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router'; // useSearchParams 임포트
import FontText from '@/components/theme/FontText';
import Entypo from '@expo/vector-icons/Entypo';
import ImageSlider from './organism/ImageSlider';
import Hr from '@/components/Hr';

export default function MainCity() {
  // useSearchParams를 사용하여 쿼리 파라미터에서 지역 이름을 추출
  const router = useRouter(); 
  const { city } = useLocalSearchParams();
  const mockData = [
    {
      id: 1,
      title: '구름톤 유니브 3기 단풍톤',
      date: '2024.11.23 ~ 2024.11.24',
      image: 'https://i.ibb.co/pfgRwzY/danpung-Thon.png',
    },
    {
      id: 2,
      title: '공생광장 특별 프로그램 <늦깎이 배우수업>',
      date: '2024-09-12 ~ 2024-12-05',
      image: 'https://i.ibb.co/ZmhyPTF/image-17.png',
    },
    {
      id: 3,
      title: '2024 밴드 오브 아트트럭 ',
      date: '2024년 11월 24일 일요일 오후1시',
      image: 'https://i.ibb.co/pxTpg8d/image-19.png',
    },
  ];

  const duringmockData = [
    {
      id: 1,
      title: '구름톤 유니브 3기 단풍톤',
      date: '2024.11.23 ~ 2024.11.24',
      image: 'https://i.ibb.co/pfgRwzY/danpung-Thon.png',
    },
    {
      id: 2,
      title: '공생광장 특별 프로그램 <늦깎이 배우수업>',
      date: '2024-09-12 ~ 2024-12-05',
      image: 'https://i.ibb.co/ZmhyPTF/image-17.png',
    },
    
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        {/* 상단 */}
        <View className="flex-row items-center mt-11 px-5">
          <TouchableOpacity className=" flex-row gap-4 items-center mr-4" onPress={() => router.back()}>
            <Entypo name="chevron-left" size={16} color="#1B1D1F" />
          
          
            <FontText style={{ fontSize: 16, fontWeight: 800 }}>{city}</FontText> {/* 도시 이름 표시 */}
            </TouchableOpacity>
          
        </View>

        {/* 내용 */}
        <View className="flex-row items-center mt-11 mb-5 px-5">
          <FontText style={{ fontSize: 20, fontWeight: 800 }}>예정된 축제</FontText>
        </View>
        <ImageSlider festivalData={mockData} />
        <View className="flex-row items-center mt-11 mb-5 px-5">
          <FontText style={{ fontSize: 20, fontWeight: 800 }}>진행중인 축제</FontText>
        </View>
        <ImageSlider festivalData={duringmockData} />
        <Hr />
      </ScrollView>
    </SafeAreaView>
  );
}
