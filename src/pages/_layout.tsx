import { Stack } from "expo-router";

export default function AppLayout() {
  // screenOptions : expo-router설정
  // headerShone : 현재 페이지 확인 기능
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    ></Stack>
  );
}
