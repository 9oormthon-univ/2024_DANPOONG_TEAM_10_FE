import { StyleSheet, Text } from "react-native";

interface ThemedTextProps {
  children: string| React.ReactNode;
  style?: object;
  color?: string;
  //   bold?: boolean | undefined;
}

// 폰트가 적용된 Text 컴포넌트
export default function FontText({ children, style,  color }: ThemedTextProps) {
  return <Text style={[style,{ color }]}>{children}</Text>;
}

const styles = StyleSheet.create({
  //   fontRagualr: {
  //     fontFamily: "HostGrotesk",
  //   },
  //   fontBold: {
  //     fontFamily: "HostGroteskBold",
  //   },
});
