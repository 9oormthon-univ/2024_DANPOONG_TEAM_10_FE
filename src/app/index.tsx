import FontText from '@/components/theme/FontText';
import { Link, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

import LottieView from 'lottie-react-native';

export default function App() {
  // 작업 테스트용 라우팅
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('/pages/Main');
    }, 5000);
  }, []);
  // 작업 테스트용 라우팅

  return (
    <View className="w-full h-full flex-1 bg-cyan-950">
      <LottieView
        autoPlay
        style={{
          width: '100%',
          height: '100%',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/splash.json')}
      />
    </View>
  );
}
