import MapIcon from '@/components/MapIcon';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { router } from 'expo-router';
import FontText from '@/components/theme/FontText';
import Entypo from '@expo/vector-icons/Entypo';
import Hr from '@/components/Hr';
import ImageSlider from './organism/ImageSlider';
import { fetchCityData, CityData } from './organism/fetchCityData'; // CityData 임포트
import FestivalList from './organism/FestivalList';

export default function Main() {
  const [cityData, setCityData] = useState<CityData[]>([]);
  const mockData = [
    {
        title: '구름톤 유니브 3기 단풍톤',
        subTitle: '카카오 AI 캠퍼스',
        poster: '',
        status: true,
        date: '2024.11.23 ~ 2024.11.24',
        describe:
          '단풍톤은 구름톤 유니브 3기 소속 대학 47개, 400여명의 미르미가 함께 모여 가을에 진행하는 해커톤입니다.',
        location: '경기도 용인시 수지구 오수로96번길 7',
        latitude: 37.35174165739167,
        longitude: 127.07188065701887,
    },
    {
      title: '공생광장 특별 프로그램 <늦깎이 배우수업>',
      date: '2024-09-12 ~ 2024-12-05',
      poster: 'https://i.ibb.co/pxTpg8d/image-19.png',
    },
    {
      title: '2024 밴드 오브 아트트럭 ',
      date: '2024년 11월 24일 일요일 오후1시',
      poster: 'https://s3-alpha-sig.figma.com/img/a22b/d4f9/779147892922435902d1f33d00b315f8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R6yOS8HHN5VVDsFn7VpwKovv62Rn3ondplHnwMwNu9itkS9Azxif0n0~XXzZcPG6sSjKoafkvgB5P1pnpBd1KQgFAO52BnRavWEdjs01vGGbHkCS68VxhAay0JMHjwtC4q8A9lT3JH6DU34SoPMHL6LfqHQEnQsFLrh-JOMOhgrLbk3XrLPbgdyJqxGrvCTZlLl0i5wOu88rm-CagAgXPVzuVe3k6oo2CkcGuNVQPB3fzQY9BE50NaqfpNtuTRxaAGkDwozbNE3~Z4n60H8Dd0Uw4Xl9nc-d02PG9obBH4~HjB12GzBkTozVPZJPHIa2F-vCPybag0ZhXzcpYam8QQ__',
    },
  ];

  const duringmockData = [
    {
      id: 1,
      title: '2024 생활문화 디깅',
      date: '2024-11-01 ~ 2024-11-30',
      image: 'https://s3-alpha-sig.figma.com/img/e0be/7760/3ff2d66b8073f7b6539d7a7e94978648?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k3Ch6PM4iAXDYAy34MLwZcgmCtlcQp7ewRq9Mc~9n2C8yjG42LpOTgReREfiln1Zy-OWEll1Z9dMXmX-JpFLF78W2M3UkbzMXE8nra2E2Z1GJCy9MY2-GSi5RruCmYnjtF6hZNMgu8x1dJRdV5nI6GykTWmdW4mW62BpA6hvNiVH8LiOFGVhnkcobAQR38JEeX0IkyLUOmdxqrsCTSBHUG34ta29ZT94ScMn6ZqkUUPg4KwcLtJnKtp7lo1-gLWvsrUbvaleDSuE9opUQOcEKfbawkw-xyZgtYjxWQkeqB4JL1mf0yO3dfgX5oIhKVILWr9M49dF-Iea1junTYYXqA__',
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



  useEffect(() => {
    const loadCityData = async () => {
      const data = await fetchCityData();
      setCityData(data);
    };

    loadCityData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* 상단 */}
        <View className="flex-row items-center mt-11 px-5">
          <View className="mr-4">
            <MapIcon />
          </View>
          <View className="mr-2">
            <FontText style={{ fontSize: 16, fontWeight: 800 }}>경기도</FontText>
          </View>
          <TouchableOpacity onPress={() => router.push('pages/Modal/MapModal')}>
            <Entypo name="chevron-down" size={16} color="#1B1D1F" />
          </TouchableOpacity>
        </View>

        {/* 지역 목록 스크롤 */}
        <ScrollView className="px-5 mt-7 mb-7" horizontal={true}>
          {cityData.map((city) => (
            <TouchableOpacity
              key={city.id}
             // router.push 사용 시 'query' 대신 'params'를 사용하여 데이터 전달
             onPress={() => router.push({
             pathname: 'pages/Main/MainCity', 
             params: { city: city.name } // city 이름을 params로 전달
           })}
              className="mr-5 items-center"
            >
              <View className="w-20 h-20 rounded-full bg-gray-300 justify-center items-center overflow-hidden relative">
        {/* 어두운 오버레이 추가 */}
        <View className="absolute inset-0 bg-black opacity-0" /> {/* 이미지 위에 어두운 오버레이 추가 */}
        
        <Image
          source={{ uri: city.image }}
          className="w-full h-full object-cover"
        />
                <FontText className="absolute text-white font-bold">{city.name}</FontText>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Hr />

        {/* 내용 */}
        <View className="flex-row items-center mt-11 mb-5 px-5">
          <FontText style={{ fontSize: 20, fontWeight: 800 }}>예정된 축제</FontText>
        </View>
        <ImageSlider festivalData={mockData}/>
        <Hr />
        <View className="mt-4">
          {/* FestivalList 컴포넌트는 그대로 사용 */}
          <FestivalList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
