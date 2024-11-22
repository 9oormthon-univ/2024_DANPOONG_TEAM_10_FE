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
  const [profileImage, setProfileImage] = useState<string | null>(null); // Profile image state

  useEffect(() => {
    const loadProfileImage = async () => {
      const storedImage = await AsyncStorage.getItem('profileImage');
      if (storedImage) {
        setProfileImage(storedImage); // Load profile image from AsyncStorage
      }

      const storedName = await AsyncStorage.getItem('userName'); // Fetch userName from AsyncStorage
      if (storedName) {
        setName(storedName); // If userName exists, set it
      }
    };

    loadProfileImage(); // Load profile image and userName
  }, []);

  return (
    <SafeAreaView className="flex-1 w-full items-center">
      {/* Profile Component */}
      <Profile initialProfileImage={profileImage} />

      <View className="mt-11 mb-10 px-6">
        <SignupForm
          name={name}
          onNameChange={(newName) => setName(newName)}
          onValidChange={(valid) => setIsValid(valid)}
          placeholder={name || "닉네임을 입력하세요"} // Set dynamic placeholder
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        className={`w-2/5 justify-center rounded-full py-2 items-center mt-40 mb-3 ${
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
