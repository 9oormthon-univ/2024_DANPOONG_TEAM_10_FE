import { Stack } from 'expo-router';
import '../../global.css';

import { Provider } from 'react-redux';
import store from '@/stores/store';

export default function AppLayout() {
  // screenOptions : expo-router설정
  // headerShone : 현재 페이지 확인 기능
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </Provider>
  );
}