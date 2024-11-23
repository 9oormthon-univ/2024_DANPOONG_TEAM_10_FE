import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";
import SignupForm from "../Signup/organism/SignupForm";
import FontText from "@/components/theme/FontText";
import Profile from "./Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function MyPageDetail() {
  const [name, setName] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const loadProfileImage = async () => {
      const storedImage = await AsyncStorage.getItem('profileImage');
      if (storedImage) {
        setProfileImage(storedImage);
      }

      const storedName = await AsyncStorage.getItem('userName');
      if (storedName) {
        setName(storedName); 
      }
    };

    loadProfileImage(); 
  }, []);

  return (
    <SafeAreaView className="flex-1 w-full items-center">
      {/* Profile Component */}
      <View className="mt-[60px]">
      <Profile initialProfileImage={profileImage} />
      </View>
      <View className="mt-11 mb-10 px-6">
        <SignupForm
          name={name}
          onNameChange={(newName) => setName(newName)}
          onValidChange={(valid) => setIsValid(valid)}
          placeholder={name || "닉네임을 입력하세요"}
        />
      </View>

      <View className="w-full px-5 mt-[77px]">
        <FontText className="font-base text-[12px] text-[#9FA4A9]">
        프로필 정보(이름, 사진)는 리뷰 작성 시 표시됩니다.
        </FontText>
      </View>
      {/* Submit Button */}
      <TouchableOpacity
        className={`w-2/5 justify-center rounded-full py-2 items-center mt-[24px] mb-3 ${
          isValid
            ? "bg-[#053C57]"
            : "border-[1px] border-[#053C57] bg-[#F7F8F9]"
        }`}
        onPress={() => {
          router.back()
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
