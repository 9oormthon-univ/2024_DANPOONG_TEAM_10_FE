import { View } from 'react-native';
import FontText from './theme/FontText';

interface FestStatusProps {
  isOpen: boolean;
}

// 축제 상태를 나타내는 컴포넌트
export default function FestStatus({ isOpen }: FestStatusProps) {
  return (
    <View
      className={`px-2 border-2 border-gray-600 rounded-full justify-center text-center overflow-hidden
        ${isOpen ? 'bg-gray-600' : 'bg-white'}`}
    >
      {isOpen ? (
        <FontText className="text-xl color-white text-center font-bold">
          축제 진행 중
        </FontText>
      ) : (
        <FontText className="text-xl text-center font-bold ">
          예정된 축제
        </FontText>
      )}
    </View>
  );
}
