import { View } from 'react-native';

interface HeaderProps {
  left?: JSX.Element;
  right?: JSX.Element;
}

// Header 에서 left, right 컴포넌트를 받아서 보여줌
export default function Header({ left, right }: HeaderProps) {
  return (
    <View className="h-20 flex-row items-center justify-between px-10 bg-gray-300">
      <View>{left}</View>
      <View>{right}</View>
    </View>
  );
}
