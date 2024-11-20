import { StyleSheet, Text } from 'react-native';

interface ThemedTextProps {
  children: string | React.ReactNode;
  style?: object;
  color?: string;
  //   bold?: boolean | undefined;
  className?: string;
}

// 폰트가 적용된 Text 컴포넌트
export default function FontText({
  children,
  style,
  color,
  className,
}: ThemedTextProps) {
  return (
    <Text className={className} style={[style, { color }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  //   fontRagualr: {
  //     fontFamily: "HostGrotesk",
  //   },
  //   fontBold: {
  //     fontFamily: "HostGroteskBold",
  //   },
});
