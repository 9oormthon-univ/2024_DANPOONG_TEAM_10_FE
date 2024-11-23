import FontText from '@/components/theme/FontText';
import { Link, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function App() {
  // 작업 테스트용 라우팅
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('/pages/Main');
    }, 1000);
  }, []);
  // 작업 테스트용 라우팅

  return (
    <View>
      <Link href="/pages/Account">Account</Link>
      <FontText>Index</FontText>
    </View>
  );
}
