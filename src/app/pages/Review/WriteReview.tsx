import Header from '@/components/layouts/Header';
import Profile from '@/components/Profile';
import Stars from '@/components/Stars';
import FontText from '@/components/theme/FontText';
import { TextInput, TouchableOpacity, View } from 'react-native';

export default function WriteReview() {
  return (
    <View className="flex-1">
      <Header left={<FontText>{'< 리뷰 작성하기'}</FontText>} />
      <View className="flex-1 m-7 gap-5">
        <Profile image="imgURL" nickname="닉네임" />
        <View className="flex-[5] bg-gray-200 items-center justify-center">
          <TouchableOpacity className="h-10 w-10 bg-cyan-900 items-center justify-center rounded-full">
            <FontText style={{ color: 'white' }}>+</FontText>
          </TouchableOpacity>
        </View>
        <View className="flex-1 gap-3 justify-center">
          <FontText>이 축제에 얼마나 만족하시나요?</FontText>
          <Stars count={4} />
        </View>
        <TextInput
          multiline
          className="flex-[3] border-2 p-2"
          placeholder="다른 고객님에게 도움이 되도록 축제에 대한 솔직한 평가를 남겨주세요.(축제와 관계 없는 내용, 지나친 비난은 관리자에 의해 삭제될 수 있습니다.)"
        />
        <View className="flex-1 items-center">
          <TouchableOpacity className="flex-1 w-1/2 bg-cyan-900 items-center justify-center  rounded-full">
            <FontText style={{ color: 'white' }}>완료</FontText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
