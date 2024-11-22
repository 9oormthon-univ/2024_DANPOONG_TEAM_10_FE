import React, { useEffect, useState } from "react";
import { View, TextInput, Image, ActivityIndicator } from "react-native";
import FontText from "@/components/theme/FontText";

interface SignupFormProps {
  name: string;
  onValidChange: (isValid: boolean) => void; // 유효성 결과 전달 콜백
  onNameChange: (name: string) => void; // 이름 변경 콜백
}

export default function SignupForm({
  name,
  onValidChange,
  onNameChange,
}: SignupFormProps) {
  const [inputName, setInputName] = useState<string>(name);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [existingNames, setExistingNames] = useState<string[]>([]);

  // 중복 데이터 가져오기
  useEffect(() => {
    const fetchExistingNames = async () => {
      try {
        setLoading(true);
        // 여기서 API 호출을 통해 데이터 로드
        // const response = await fetch("https://api.example.com/existing-names");
        // const data = await response.json();
        const data = ["john", "jane", "doe"]; // 임시 데이터
        setExistingNames(data.map((name) => name.toLowerCase()));
      } catch (error) {
        console.error("Failed to fetch existing names:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExistingNames();
  }, []);

  // 이름 변경 핸들러
  const handleNameChange = (text: string) => {
    setInputName(text);
    onNameChange(text);

    let newError: string | null = null;

    if (text.length < 2 || text.length > 10) {
      newError = "닉네임은 2~10글자 사이로 입력해주세요.";
    } else if (existingNames.includes(text.toLowerCase())) {
      newError = "이미 사용 중인 닉네임입니다.";
    }

    setError(newError);
    onValidChange(newError === null); // 에러가 없으면 유효(true)
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

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
        inputName && (
          <View className="flex-row items-center mt-1">
            <Image source={require("@/assets/check-icon.png")} className="mr-1" />
            <FontText className="text-[#053C57]" style={{ fontSize: 12 }}>
              사용 가능한 닉네임입니다.
            </FontText>
          </View>
        )
      )}
    </View>
  );
}
