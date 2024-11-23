import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View, Image, ScrollView } from 'react-native';
import FontText from '@/components/theme/FontText';

const { width } = Dimensions.get('window');

export default function ImageSlider() {
  const images = [
    require('@/assets/adaptive-icon.png'),
    require('@/assets/logo.png'),
    require('@/assets/logo.png'),
  ];

  const scrollViewRef = useRef<ScrollView>(null); 
  const [currentIndex, setCurrentIndex] = useState(0);

  //자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length; 

      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: width * nextIndex, animated: true });
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View>
      <ScrollView
        ref={scrollViewRef} 
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {images.map((image, index) => (
          <View key={index} className="justify-center items-center p-3" style={{ width: width, height: width }}>
            <Image source={image} className="w-full border-2 h-full rounded-lg" resizeMode="contain" />
            <FontText>{index + 1}</FontText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
