import { useState } from "react";
import { View, Pressable, Text, SafeAreaView } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";
import { router } from "expo-router";
import FontText from "@/components/theme/FontText";
import Line from "@/components/Line";

// 선택 가능한 키 타입 정의
type CheckboxKey = "seoul" | "incheon" | "daejeon" | "daegu" | "ulsan" | "busan" | "gwangju";

export default function MapModal() {
  const [selectedKey, setSelectedKey] = useState<CheckboxKey | null>(null);

  // 체크박스 상태 변경
  const handleCheckboxChange = (key: CheckboxKey) => {
    setSelectedKey((prev) => (prev === key ? null : key));
  };

  // 선택한 항목 출력
  const handleSubmit = () => {
    console.log("선택한 항목:", selectedKey);
  };

  return (
    <Animated.View
      entering={FadeIn}
      className="flex-1 justify-end items-center bg-[#00000040]"
    >
      <Animated.View
        entering={SlideInDown}
        className="w-full px-5 justify-center bg-white rounded-t-[20px]"
      >
        <FontText className="font-extrabold text-xl mb-2 mt-8">지역 선택</FontText>
        <FontText className="font-bold text-sm text-[#9FA4A9] mb-2">
          알아 보고 싶은 지역을 선택해요
        </FontText>

        <Line />

        {/* 개별 지역 선택 */}
        <SafeAreaView className="flex-row flex-wrap">
        {[
          { key: "seoul", label: "서울" },
          { key: "incheon", label: "인천" },
          { key: "daejeon", label: "대전" },
          { key: "daegu", label: "대구" },
          { key: "ulsan", label: "울산" },
          { key: "busan", label: "부산" },
          { key: "gwangju", label: "광주" },
        ].map(({ key, label }) => (
            
          <Pressable
            key={key}
            onPress={() => {handleCheckboxChange(key as CheckboxKey);
                handleSubmit();
                router.push("pages/Main/Main"); }}
            className="flex-row pr-[75px] mb-2"
          >

            <FontText className="font-bold text-base  mr-[52px]">{label}</FontText>
            <View
              className={`w-5 h-5 mr-2 rounded-full border-2  ${
                selectedKey === key ? "bg-[#053C57] border-[#053C57]" : "border-[#9FA4A9]"
              }`}
            />
          </Pressable>
        ))}
</SafeAreaView>

        {/* 완료 버튼
        <View className="justify-center items-center">
          <Pressable
            onPress={() => {
              handleSubmit();
              router.push("pages/Main/Main");
            }}
            disabled={!selectedKey}
            className={`w-[142px] mt-[60px] p-2 border-[#053C57] border-[1px] rounded-[20px] justify-center items-center ${
              selectedKey ? "bg-[#053C57]" : "bg-[#F7F8F9]"
            }`}
          >
            <FontText
              className={`font-bold ${
                selectedKey ? "text-[#FFFFFF]" : "text-[#053C57]"
              }`}
            >
              완료
            </FontText>
          </Pressable>
        </View> */}
      </Animated.View>
    </Animated.View>
  );
}