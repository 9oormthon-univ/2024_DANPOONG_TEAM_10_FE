import { TouchableOpacity } from 'react-native';
import FontText from './FontText';

interface TitleProps {
  children: string;
}

// 타이틀에 사용하는 텍스트
export default function TitleText({ children }: TitleProps) {
  return <FontText className="text-xl font-bold">{children}</FontText>;
}
