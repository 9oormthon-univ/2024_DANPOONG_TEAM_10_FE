import React, { useState } from "react";
import { TouchableOpacity, Alert, SafeAreaView, View } from "react-native";
import SignupForm from "../Signup/organism/SignupForm";
import FontText from "@/components/theme/FontText";

export default function MyPageDetail() {
  const [name, setName] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  return (
    <SafeAreaView className="w-full">
      <View className="mt-11 mb-10 px-6">
        <SignupForm
          name={name}
          onNameChange={(newName) => setName(newName)}
          onValidChange={(valid) => setIsValid(valid)}
        />
      </View>

      {/* 완료 버튼 */}
      <TouchableOpacity
        className={`w-2/5 rounded-full py-2 items-center mt-40 mb-3 ${
          isValid
            ? "bg-[#053C57]"
            : "border-[1px] border-[#053C57] bg-[#F7F8F9]"
        }`}
        onPress={() => {
          Alert.alert("완료", "회원가입이 완료되었습니다.");
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
