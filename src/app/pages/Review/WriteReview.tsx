import Header from '@/components/layouts/Header';
import FontText from '@/components/theme/FontText';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';
import Title from '@/components/theme/TitleText';
import { useRouter } from 'expo-router';
import FestStatus from '@/components/FestStatus';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { AntDesign, Entypo } from '@expo/vector-icons';
import TitleText from '@/components/theme/TitleText';

export default function WriteReview() {
  const router = useRouter();

  const festivalData = useSelector((state: RootState) => state.festivalData);

  // 사용자 입력 이미지
  const [imageList, setImageList] = useState<string[]>([]);
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

    console.log(result);
    if (!result.canceled) {
      setImageList((prev) => [...prev, result.assets[0].uri]);
    }
  };

  const deleteImage = (index: number) => {
    setImageList((prev) => prev.filter((_, i) => i !== index));
  };

  // 뒤로 가기
  const goBack = () => {
    router.back();
  };

  return (
    <View className="flex-1">
      <Header
        left={
          <TouchableOpacity onPress={goBack} className="flex-row items-center">
            <Entypo name="chevron-small-left" size={24} color="black" />
            <Title>{'리뷰 작성하기'}</Title>
          </TouchableOpacity>
        }
      />

      <ScrollView>
        {/* 축재 정보 */}
        <View className=" flex-row p-5 gap-5">
          <View className="w-[150] h-[200] bg-gray-200 rounded-xl overflow-hidden">
            <Image
              style={{ width: '100%', height: '100%' }}
              source={{ uri: festivalData.poster }}
            />
          </View>
          <View className="w-1/2 gap-2 pr-5">
            <View className="max-w-[120]">
              <FestStatus isOpen={true} />
            </View>
            <FontText className="text-xl font-bold">
              {festivalData.title}
            </FontText>
            <FontText>{festivalData.subTitle}</FontText>
            <FontText>{festivalData.date}</FontText>
          </View>
        </View>

        {/* 별점 */}
        <View className="p-5 gap-5">
          <TitleText>이 축제에 대해 얼마나 만족하시나요?</TitleText>
          <View className="rounded-xl bg-gray-200 p-6 flex-row gap-3 justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setStars(i + 1);
                }}
              >
                {/* <View
                  className={`rounded-full h-12 w-12 ${i >= stars ? 'bg-gray-500' : 'bg-gray-900'}`}
                /> */}
                {i >= stars ? (
                  <AntDesign name="star" size={24} color={'gray'} />
                ) : (
                  <AntDesign name="star" size={24} color={'#053C57'} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 축제 후기 */}
        <View className="p-5 gap-5">
          <TitleText>축제 후기</TitleText>
          <TextInput
            onChangeText={setContent}
            placeholder="다른 고객님에게 도움이 되도록 축제에 대한 솔직한 평가를 남겨주세요. (축제와 관계 없는 내용, 지나친 비난은 관리자에 의해 삭제될 수 있습니다.)"
            maxLength={200}
            multiline
            textAlignVertical="top"
            className="min-h-32 border-2 border-gray-300 rounded-xl p-2"
          />
        </View>

        {/* 사진 첨부하기 */}
        <View className="p-5 gap-5">
          <View>
            <TitleText>사진 첨부하기</TitleText>
            <FontText>최대 4장까지 첨부 가능합니다.</FontText>
          </View>
          <ScrollView horizontal className="py-5">
            {/* 이미지 추가 버튼 */}
            {imageList.length < 4 && (
              <TouchableOpacity
                onPress={pickImage}
                className="mr-5 h-[120] w-[120] bg-gray-300 rounded-xl justify-center items-center"
              >
                <Entypo name="plus" size={40} color="white" />
              </TouchableOpacity>
            )}

            {/* 이미지들 */}
            {imageList.length !== 0 &&
              imageList.map((image, i) => (
                <View className="mr-5  h-[120] w-[120]" key={i}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 12,
                      borderWidth: 1,
                    }}
                    source={{ uri: image }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      deleteImage(i);
                    }}
                    className="h-8 w-8 bg-white absolute items-center justify-center rounded-full top-[-10] right-[-10] border "
                  >
                    <Entypo name="cross" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView>
        </View>

        {/* 완료 */}
        <View className="p-5 items-center">
          <TouchableOpacity className="bg-cyan-900 px-20 py-2 rounded-full">
            <FontText className="font-bold color-white text-xl">완료</FontText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
