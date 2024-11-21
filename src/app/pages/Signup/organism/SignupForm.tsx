import React, { useState, useEffect } from "react";
import { View, TextInput, Image } from "react-native";
import FontText from "@/components/theme/FontText";

interface SignupFormProps {
  name: string;
  onNameChange: (name: string) => void;
}

export default function SignupForm({ name, onNameChange }: SignupFormProps) {
  const [inputName, setInputName] = useState<string>(name);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setInputName(name);
  }, [name]);

  const handleNameChange = (text: string) => {
    setInputName(text);
    onNameChange(text);
    if (text.length < 2 || text.length > 10) {
      setError("닉네임은 2~10글자 사이로 입력해주세요.");
    } else {
      setError(null);
    }
  };

  return (
    <View className="w-full justify-center">
      <FontText style={{ fontSize: 16, fontWeight: "bold" }}>이름</FontText>
      <TextInput
        className={`h-11 border rounded-lg mt-3 px-3 text-xs ${
          error ? "border-[#FB8401]" : "border-[#E9EBED]"
        }`}
        placeholder="닉네임을 입력하세요"
        value={inputName}
        onChangeText={handleNameChange}
        placeholderTextColor="#9FA4A9"
      />

      {error ? (
        <View className="flex-row items-center mt-1">
          <Image source={require("@/assets/warning-icon.png")} className="mr-1" />
          <FontText className="text-[#053C57]" style={{ fontSize: 12 }}>
            {error}
          </FontText>
        </View>
      ) : (
        name && (
          <View className="flex-row items-center mt-1">
            <Image source={require("@/assets/check-icon.png")} className="mr-1" />
            <FontText className="text-[#053C57]" style={{ fontSize: 12 }}>
              사용 가능한 닉네임 입니다.
            </FontText>
          </View>
        )
      )}
    </View>
  );
}
