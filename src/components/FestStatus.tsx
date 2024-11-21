import { View } from 'react-native';
import FontText from './theme/FontText';

interface FestStatusProps {
  isOpen: boolean;
}

// 축제 상태를 나타내는 컴포넌트
export default function FestStatus({ isOpen }: FestStatusProps) {
  return (
    <View className="border-2 border-gray-600 rounded-full justify-center text-center">
      {isOpen ? (
        <FontText className="bg-gray-600 rounded-full  color-white  text-center py-2 font-bold">
          축제 진행 중
        </FontText>
      ) : (
        <FontText className=" text-center py-2 font-bold">예정된 축제</FontText>
      )}
    </View>
  );
}
