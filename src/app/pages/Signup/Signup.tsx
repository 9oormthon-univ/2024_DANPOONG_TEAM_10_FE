//회원가입 페이지
import FontText from "@/components/theme/FontText";
import React from "react";
import { SafeAreaView,View, TouchableOpacity, Image } from "react-native";
import SignupForm from "./organism/SignupForm";
import BirthdatePicker from "./organism/BirthdatePicker";
import SignupList from "./molecules/SignupList";
import Header from "@/components/layouts/Header";
import { router } from 'expo-router';

export default function Signup() {
  return (
    <SafeAreaView className="flex-1 items-center w-full">
      <View className="w-full">
      <Header left={<FontText>{'< 회원가입'}</FontText>} />
      </View>
      {/* 입력폼 */}
      <View className="mt-10 mb-10 px-6">
        <SignupForm />
      </View>

      {/* 생년월일 */}
      <View className="mb-10 px-6">
        <BirthdatePicker />
      </View>

      {/* 본인인증 */}
      <SignupList
        title="본인인증"
      />
      <SignupList
        title="서비스 이용 약관"
        description="동의를 거절하는 경우 서비스 이용이 제한 될 수 있습니다."
        showRadioButtons
      />
      <SignupList
        title="개인 정보 활용 동의"
        description="동의를 거절하는 경우 서비스 이용이 제한 될 수 있습니다."
        showRadioButtons
      />
      <SignupList
        title="마켓팅 수신 동의"
        description="동의를 거절하는 경우 서비스 이용이 제한 될 수 있습니다."
        showRadioButtons
      />

      <TouchableOpacity
        className="w-3/5 bg-[#053C57] rounded-full py-2 items-center mt-4 mb-3"
        onPress={() => router.push('pages/Main/Main')}
      >
        <FontText className="text-white">완료</FontText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
