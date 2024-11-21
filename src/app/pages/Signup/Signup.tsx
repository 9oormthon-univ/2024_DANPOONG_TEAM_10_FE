import FontText from "@/components/theme/FontText";
import React, { useState, useCallback } from "react";
import { SafeAreaView,View, TouchableOpacity } from "react-native";
import SignupForm from "./organism/SignupForm";
import BirthdatePicker from "./organism/BirthdatePicker";
import Header from "@/components/layouts/Header";
import GenderButton from "./molecules/GenderButton";

export default function Signup() {
  const [name, setName] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [birthdate, setBirthdate] = useState<{ year: string | null; month: string | null; day: string | null }>({
    year: null,
    month: null,
    day: null,
  });

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  const handleSelectGender = (gender: string | null) => {
    setSelectedGender(gender);
  };

  const handleDateChange = useCallback((date: { year: string | null; month: string | null; day: string | null }) => {
    setBirthdate(date);
  }, []);
  

  const handleSubmit = () => {
    console.log("닉네임:", name); 
    console.log("성별:", selectedGender);
    console.log("생년월일:", birthdate);
  };

  const isFormValid =
    name.trim() !== "" &&
    selectedGender !== null &&
    birthdate.year !== null &&
    birthdate.month !== null &&
    birthdate.day !== null;

  return (
    <SafeAreaView className="flex-1 items-center w-full">
      <View className="w-full">
        <Header left={<FontText>{'< 회원가입'}</FontText>} />
      </View>
      {/* 입력폼 */}
      <View className="mt-11 mb-10 px-6">
        <SignupForm name={name} onNameChange={handleNameChange} />
      </View>

      {/* 생년월일 */}
      <View className="mb-10 px-6">
        <BirthdatePicker onDateChange={handleDateChange} />
      </View>

      {/* 성별 버튼 */}
      <GenderButton onSelectGender={handleSelectGender} />

      {/* 완료 버튼 */}
      <TouchableOpacity
        className={`w-2/5 rounded-full py-2 items-center mt-40 mb-3 ${
          isFormValid ? "bg-[#053C57]" : "border-[1px] border-[#053C57] bg-[#F7F8F9]"
        }`}
        onPress={handleSubmit}
        disabled={!isFormValid}
      >
        <FontText className={`font-extrabold text-[16px] ${isFormValid? "text-white" : "text-[#053C57]"}`}>완료</FontText>

      </TouchableOpacity>
    </SafeAreaView>
  );
}
