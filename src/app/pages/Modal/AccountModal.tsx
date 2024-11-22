import { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
import { router } from 'expo-router';
import FontText from '@/components/theme/FontText';
import Line from '@/components/Line';

// 체크박스 상태를 관리하는 타입 정의
type CheckboxState = {
  all: boolean;
  over14: boolean;
  termsOfService: boolean;
  personalInfo: boolean;
  locationService: boolean;
  marketingInfo: boolean;
};

export default function AccountModal() {
  const [checkboxes, setCheckboxes] = useState<CheckboxState>({
    all: false,
    over14: false,
    termsOfService: false,
    personalInfo: false,
    locationService: false,
    marketingInfo: false,
  });

  // 모든 필수 항목이 체크되었는지 확인
  const isAllRequiredChecked =
    checkboxes.over14 &&
    checkboxes.termsOfService &&
    checkboxes.personalInfo &&
    checkboxes.locationService;

  //체크박스 상태 변경
  const handleCheckboxChange = (key: keyof CheckboxState) => {
    if (key === 'all') {
      const newState = !checkboxes.all;
      setCheckboxes({
        all: newState,
        over14: newState,
        termsOfService: newState,
        personalInfo: newState,
        locationService: newState,
        marketingInfo: newState,
      });
    } else {
      setCheckboxes((prev) => ({
        ...prev,
        [key]: !prev[key],
        all: key !== 'marketingInfo' && isAllRequiredChecked && !prev[key],
      }));
    }
  };

  // 필수 항목만 출력
  const handleSubmit = () => {
    console.log('선택한 항목:', checkboxes);
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
        <FontText className="font-extrabold text-xl mb-2 mt-8">약관에 동의해주세요.</FontText>

        {/* 약관 전체 동의 */}
        <Pressable
          onPress={() => handleCheckboxChange('all')}
          className="flex-row items-center mb-2"
        >
          <View
            className={`w-6 h-6 mr-2 rounded-full border-2 ${
              checkboxes.all ? 'bg-[#053C57] border-[#053C57]' : 'border-[#9FA4A9]'
            }`}
          />
          <FontText className="font-extrabold text-xl">약관 전체 동의</FontText>
        </Pressable>
        <FontText className="font-bold text-sm text-[#9FA4A9] mb-2">
          서비스 이용을 위해 아래 약관에 모두 동의합니다.
        </FontText>
<Line/>
        {/* 개별 약관 */}
        {[
            { key: 'over14', label: '(필수) 만 14세 이상입니다.', optional: false },
            { key: 'termsOfService', label: '(필수) 서비스 이용 약관', optional: false },
            { key: 'personalInfo', label: '(필수) 개인 정보 수집 및 이용', optional: false },
            { key: 'locationService', label: '(필수) 위치 기반 서비스 이용 약관', optional: false },
            { key: 'marketingInfo', label: '(선택) 마케팅 정보 수신 동의', optional: true },
            ].map(({ key, label, optional }) => (
            <Pressable
                key={key}
                onPress={() => handleCheckboxChange(key as keyof CheckboxState)}
                className="flex-row justify-between items-center mb-2"
            >
                <FontText className="font-bold text-base">
                {optional ? (
                    <>
                    <Text className="text-[#9FA4A9]">(선택)</Text> 마케팅 정보 수신 동의
                    </>
                ) : (
                    label
                )}
                </FontText>
                <View
                className={`w-5 h-5 mr-2 rounded-full border-2  ${
                    checkboxes[key as keyof CheckboxState]
                    ? 'bg-[#053C57] border-[#053C57]'
                    : 'border-[#9FA4A9]'
                }`}
                />
            </Pressable>
            ))}

        {/* 다음 버튼 */}
        <View className="justify-center items-center">
            <Pressable
                onPress={() => {
                    handleSubmit();
                    router.push('pages/Account/KakaoLogin');
                  }}
                disabled={!isAllRequiredChecked}
                className={`w-[142px] mt-[60px] p-2 border-[#053C57] border-[1px] rounded-[20px] justify-center items-center ${
                isAllRequiredChecked ? 'bg-[#053C57]' : 'bg-[#F7F8F9]'
                }`}
            >
            <Text  className={`font-bold ${
                isAllRequiredChecked ? 'text-[#FFFFFF]' : 'text-[#053C57]'
                }`}>다음</Text>
            </Pressable>
        </View>
      </Animated.View>
    </Animated.View>
  );
}
