//본인인증, 이용 약관
import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import FontText from "@/components/theme/FontText";

interface SignupListProps {
  title: string;
  description?: string;
  iconSource: any;
  showRadioButtons?: boolean;
}

const SignupList: React.FC<SignupListProps> = ({
  title,
  description,
  iconSource,
  showRadioButtons = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View className="mb-10 w-full justify-center px-6">
      {/* 제목과 아이콘 */}
      <View className="flex-row items-baseline">
        <FontText color="#000"  style={{ fontSize: 16 ,fontWeight: "bold" }}>{title}</FontText>
        <Image source={iconSource} className="ml-2" />
      </View>

      {/* 설명 */}
      {description && (
        <FontText color="#9FA4A9"  style={{ fontSize: 12 }}>{description}</FontText>
      )}

      {/* 라디오 버튼 */}
      {showRadioButtons && (
        <View className="flex-row mt-2 justify-end">
          <TouchableOpacity
            className="flex-row items-center mr-5"
            onPress={() => handleSelect("동의합니다")}
          >
            <FontText color="#000"  style={{ fontSize: 12}}>동의합니다.</FontText>
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
            <FontText color="#000"  style={{ fontSize: 12}}>동의하지 않습니다.</FontText>
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
};

export default SignupList;
