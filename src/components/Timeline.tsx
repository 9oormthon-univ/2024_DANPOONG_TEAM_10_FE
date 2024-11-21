import FontText from '@/components/theme/FontText';
import { View } from 'react-native';
import { TimelineData } from '@/utils/Types';

interface TimelineProps {
  timelineData: TimelineData[];
}

// 축제 상세 페이지 타임라인
export default function Timeline({ timelineData }: TimelineProps) {
  return (
    <View className="flex-row mx-6">
      <View className="w-[2] h-full bg-gray-400 mx-[4] absolute" />
      <View className="w-full">
        {timelineData.length !== 0 &&
          timelineData.map((item, i) => (
            <View key={i} className="flex-row items-center my-5 ">
              <View className="w-[10] h-[10] rounded-full bg-black border-2 border-white " />
              <View className="flex-1 pl-5">
                <FontText className="font-bold">{item.title}</FontText>
                <FontText className="color-gray-600">{item.time}</FontText>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
}
