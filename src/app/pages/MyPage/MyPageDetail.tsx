import React, { useState } from "react";
import { View, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import SignupForm from "../Signup/organism/SignupForm";
import FontText from "@/components/theme/FontText";
import Profile from "./Profile";

export default function MyPageDetail() {
  const [name, setName] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string | null>(null); // 프로필 이미지 상태 관리

  return (
    <SafeAreaView className="flex-1 w-full items-center">
        
      {/* Profile 컴포넌트 */}
      <Profile
        initialProfileImage={profileImage}
        onImageChange={(newImage) => setProfileImage(newImage)} // 이미지 변경 처리
      />

      <View className="mt-11 mb-10 px-6">
        <SignupForm
          name={name}
          onNameChange={(newName) => setName(newName)}
          onValidChange={(valid) => setIsValid(valid)}
        />
      </View>

      {/* 완료 버튼 */}
      <TouchableOpacity
        className={`w-2/5 justify-center rounded-full py-2 items-center mt-40 mb-3 ${
          isValid
            ? "bg-[#053C57]"
            : "border-[1px] border-[#053C57] bg-[#F7F8F9]"
        }`}
        onPress={() => {
          Alert.alert("완료");
        }}
        disabled={!isValid}
      >
        <FontText
          className={`font-extrabold text-[16px] ${
            isValid ? "text-white" : "text-[#053C57]"
          }`}
        >
          완료
        </FontText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}