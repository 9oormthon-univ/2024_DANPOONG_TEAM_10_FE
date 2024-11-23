import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  View,
  Image,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import FontText from '@/components/theme/FontText';
import { router } from 'expo-router';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { setFestivalAction } from '@/stores/festivalSlice';
import { RootState } from '@/stores/store';
import { FestivalData } from '@/utils/Types';

const { width } = Dimensions.get('window');

export default function ImageSlider({
  festivalData,
}: {
  festivalData: FestivalData[];
}) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectedFestival = useSelector(
    (state: RootState) => state.festivalData
  );
  const dispatch = useDispatch();
  const onClicked = (index: number) => {
    router.push('pages/Detail');
    dispatch(setFestivalAction({ newState: festivalData[index] }));
  };

  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % festivalData.length;
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: width * nextIndex,
          animated: true,
        });
      }
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, festivalData]);

  if (festivalData.length === 0) {
    return <FontText>Loading...</FontText>;
  }

  return (
    <View>
      <ScrollView
        nestedScrollEnabled={true}
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {festivalData.map((festival, index) => (
          <TouchableOpacity
            key={index}
            className="justify-center items-center"
            style={{ width: width, height: width }}
            onPress={() => onClicked(index)}
          >
            <Image
              source={{ uri: festival.poster }}
              className="w-4/5  h-5/6 rounded-lg"
              resizeMode="cover"
            />
            <FontText className="font-bold text-base text-black">
              {festival.title}
            </FontText>
            <FontText className="font-bold text-xs text-black ">
              {festival.date}
            </FontText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
