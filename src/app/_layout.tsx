import { Stack } from "expo-router";

export default function AppLayout({ children }: any) {
  // screenOptions : expo-router설정
  // headerShone : 현재 페이지 확인 기능
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {children}
    </Stack>
  );
}
