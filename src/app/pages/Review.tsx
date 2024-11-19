import Header from '@/components/layouts/Header';
import Profile from '@/components/Profile';
import Stars from '@/components/Stars';
import FontText from '@/components/theme/FontText';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';

export default function Review() {
  return (
    <View className="flex-1">
      <View className="h-20 mt-20">
        <Header left={<FontText>{'< Header'}</FontText>} />
      </View>
      <View className="mx-7">
        <ScrollView>
          <View className="my-7 h-32 border-2 items-center justify-center gap-3">
            <FontText>이 축제에 방문하셨나요?</FontText>
            <TouchableOpacity className="bg-cyan-950 py-2 px-5 rounded-full">
              <FontText style={{ color: 'white' }}>리뷰 작성하기</FontText>
            </TouchableOpacity>
          </View>
          <View className="border-2 p-3 gap-3">
            <Profile image="imgURL" nickname="닉네임" />
            <View className="min-h-60 bg-gray-300">
              <Image />
            </View>
            <Stars count={3} />
            <FontText>
              {`리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글 리뷰글`}
            </FontText>
            <View className="flex-row justify-between">
              <View className="flex-row gap-3">
                <TouchableOpacity className="h-5 w-5 border-2">
                  <Image />
                </TouchableOpacity>
                <FontText>33</FontText>
              </View>
              <TouchableOpacity>
                <FontText>...</FontText>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
