import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import FontText from "@/components/theme/FontText";

interface GenderButtonProps {
  onSelectGender: (gender: string | null) => void;
}

export default function GenderButton({ onSelectGender }: GenderButtonProps) {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const genders = [
    { id: "male", label: "여성" },
    { id: "female", label: "남성" },
    { id: "none", label: "선택안함" },
  ];

  return (
    <View className="w-full flex-row justify-evenly px-5">
      {genders.map((gender) => (
        <TouchableOpacity
          key={gender.id}
          onPress={() => {
            setSelectedGender(gender.id);
            onSelectGender(gender.id); // 부모에게 선택된 성별 전달
          }}
          className={`w-[100px] h-[50px] px-6 py-3 m-2 rounded-2xl border justify-center items-center ${
            selectedGender === gender.id
              ? "bg-[#053C57]"
              : "bg-white border-1 border-gray-400"
          }`}
        >
          <FontText
            className={`text-base ${
              selectedGender === gender.id ? "text-white" : "text-black"
            }`}
          >
            {gender.label}
          </FontText>
        </TouchableOpacity>
      ))}
    </View>
  );
}
