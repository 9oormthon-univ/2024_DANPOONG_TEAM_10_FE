import { StyleSheet, Text } from "react-native";

interface ThemedTextProps {
  children: string;
  style?: object;
  //   bold?: boolean | undefined;
}

// 폰트가 적용된 Text 컴포넌트
export default function FontText({ children, style }: ThemedTextProps) {
  return <Text style={[style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  //   fontRagualr: {
  //     fontFamily: "HostGrotesk",
  //   },
  //   fontBold: {
  //     fontFamily: "HostGroteskBold",
  //   },
});
