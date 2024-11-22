import FontText from '@/components/theme/FontText';
import { Link, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function App() {
  // 작업 테스트용 라우팅
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('/pages/Signup/Signup');
    }, 1000);
  }, []);
  // 작업 테스트용 라우팅

}
