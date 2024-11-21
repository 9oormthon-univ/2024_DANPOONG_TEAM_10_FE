import Header from '@/components/layouts/Header';
import FontText from '@/components/theme/FontText';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';
import Title from '@/components/theme/TitleText';
import { useRouter } from 'expo-router';

export default function WriteReview() {
  const router = useRouter();

  // 사용자 입력 이미지
  const [image, setImage] = useState<string | null>(null);
  // 사용자 선택 별점
  const [stars, setStars] = useState<number>(0);
  // 사용자 입력 리뷰
  const [content, setContent] = useState<string>('');

  // 사용자로부터 이미지를 입력받는 함수
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // 뒤로 가기
  const goBack = () => {
    router.back();
  };

  return (
    <View className="flex-1">
      <Header
        left={
          <TouchableOpacity onPress={goBack}>
            <Title>{'< 리뷰 작성하기'}</Title>
          </TouchableOpacity>
        }
      />
      <View className="flex-1 m-7 p-7 gap-5 shadow bg-white rounded-xl">
        <View className="flex-[5] bg-gray-200 rounded-xl items-center justify-center">
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <TouchableOpacity
              onPress={pickImage}
              className="h-10 w-10 bg-cyan-900 items-center justify-center rounded-full"
            >
              <FontText className="text-white">+</FontText>
            </TouchableOpacity>
          )}
        </View>
        <View className="flex-1 gap-3 justify-center">
          <FontText>이 축제에 얼마나 만족하시나요?</FontText>
          <View className="flex-row gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setStars(i + 1);
                }}
              >
                {i < stars ? (
                  <View className="h-3 w-3 bg-black rounded-full" />
                ) : (
                  <View className="h-3 w-3 bg-gray-400 rounded-full" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TextInput
          onChangeText={setContent}
          multiline
          maxLength={200}
          textAlignVertical="top"
          className="flex-[3] border-2 border-gray-300 rounded-xl p-2"
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
