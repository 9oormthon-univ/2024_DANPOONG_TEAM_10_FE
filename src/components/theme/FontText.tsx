import { StyleSheet, Text } from 'react-native';

interface ThemedTextProps {
  children: string | React.ReactNode;
  style?: object;
  // font bold setting
  //   bold?: boolean | undefined;
  // nativewind
  className?: string;
  // text-overflow : ellipsis
  numberOfLines?: number;
}

// 폰트가 적용된 Text 컴포넌트
export default function FontText({
  children,
  style,
  className,
  numberOfLines,
}: ThemedTextProps) {
  return (
    <Text
      className={className}
      style={{ ...style }}
      numberOfLines={numberOfLines}
    >
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