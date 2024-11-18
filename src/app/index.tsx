import FontText from '@/components/theme/FontText';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function App() {
  // 작업 테스트용 라우팅
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace('/pages/Detail');
    }, 1000);
  }, []);
  // 작업 테스트용 라우팅

  return <FontText>jasdiofj</FontText>;
}
