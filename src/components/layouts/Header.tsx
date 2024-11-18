import { View } from "react-native";

interface HeaderProps {
  left?: JSX.Element;
  right?: JSX.Element;
}

export default function Header({ left, right }: HeaderProps) {
  return (
    <View>
      <View>{left}</View>
      <View>{right}</View>
    </View>
  );
}
