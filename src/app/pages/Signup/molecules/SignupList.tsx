////본인인증, 이용 약관 리스트
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import FontText from "@/components/theme/FontText";
import Entypo from '@expo/vector-icons/Entypo';

interface SignupListProps {
  title: string;
  description?: string;
  showRadioButtons?: boolean;
}

export default function SignupList({
  title,
  description,
  showRadioButtons = false,
}: SignupListProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View className="mb-10 w-full justify-center px-6">
      {/* 제목과 아이콘 */}
      <View className="flex-row items-end">
        <FontText style={{ fontSize: 16, fontWeight: "bold" }}>
          {title}
        </FontText>
        <Entypo name="chevron-right" size={16} color="black" />
      </View>

      {/* 설명 */}
      {description && (
        <FontText className="text-[#9FA4A9]" style={{ fontSize: 12 }}>
          {description}
        </FontText>
      )}

      {/* 라디오 버튼 */}
      {showRadioButtons && (
        <View className="flex-row mt-2 justify-end">
          <TouchableOpacity
            className="flex-row items-center mr-5"
            onPress={() => handleSelect("동의합니다")}
          >
            <FontText style={{ fontSize: 12 }}>
              동의합니다.
            </FontText>
            <View
              className={`w-4 h-4 rounded-full border border-[#053C57] ml-3 ${
                selectedOption === "동의합니다" ? "bg-[#053C57]" : ""
              }`}
            />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => handleSelect("동의하지 않습니다")}
          >
            <FontText style={{ fontSize: 12 }}>
              동의하지 않습니다.
            </FontText>
            <View
              className={`w-4 h-4 rounded-full border border-[#053C57] ml-3 ${
                selectedOption === "동의하지 않습니다" ? "bg-[#053C57]" : ""
              }`}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
