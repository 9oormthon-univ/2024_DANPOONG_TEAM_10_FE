// import React, { useState, useEffect } from 'react';
// import { TouchableOpacity, Alert, Image, SafeAreaView, ScrollView, View } from 'react-native';
// import FontText from '@/components/theme/FontText';
// import Hr from '@/components/Hr';
// import Entypo from '@expo/vector-icons/Entypo';
// import ToggleButton from './ToggleButton';
// import { router } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function MyPage() {
//   const [isOn, setIsOn] = useState(false);
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [userName, setUserName] = useState<string>("");

//   //이미지 불러오기
//   useEffect(() => {
//     const loadProfileImage = async () => {
//       const storedImage = await AsyncStorage.getItem('profileImage');
//       if (storedImage) {
//         setProfileImage(storedImage); 
//       }
//     };

//     //닉네임 불러오기
//     const loadUserName = async () => {
//       const storedName = await AsyncStorage.getItem("userName");
//       if (storedName) {
//         setUserName(storedName); 
//       }
//     };

//     loadProfileImage();
//     loadUserName();
//   }, []);

//   const handleToggle = (value: boolean) => {
//     setIsOn(value);
//   };

//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View className="w-full p-3 justify-center mt-4 mb-3 ml-5">
//           <View className="flex-row items-center gap-4">
//             <Image
//               source={{
//                 uri: profileImage || 'https://i.ibb.co/4pRkP2f/userIcon.png', 
//               }}
//               style={{ width: 100, height: 100, borderRadius: 50, marginTop: 20 }}
//             />
//             <View className="flex-col gap-2">
//               <FontText style={{ fontSize: 20, fontWeight: '800' }}>
//                 {userName || "닉네임"} {/* 닉네임 표시 */}
//               </FontText>
//               <FontText style={{ fontSize: 12 }}>카카오로그인</FontText>
//               <TouchableOpacity
//                 className="w-30 bg-gray-50 border-2 border-gray-200 items-center rounded-xl px-5 py-1"
//                 onPress={() => router.push('pages/MyPage/MyPageDetail')}
//               >
//                 <FontText className="text-[#1B1D1F]" style={{ fontSize: 16, fontWeight: '700' }}>
//                   프로필 관리
//                 </FontText>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//         <Hr />
//         <View className="w-full px-5 gap-6 mt-10">
//           <View className="flex-row justify-between items-center">
//             <View className='flex-col' >
//             <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>알람 설정</FontText>
//             <FontText className='text-[#9FA4A9]' style={{ fontSize: 14, fontWeight: '700' }}>푸시 알림을 설정합니다</FontText>
//             </View>
//             {/* Use ToggleButton component */}
//             <ToggleButton isOn={isOn} onToggle={handleToggle} />
//           </View>
//           <View className="flex-row justify-between">
//             <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>개인 정보 관리</FontText>
//             <Entypo name="chevron-right" size={16} color="#1B1D1F" />
//           </View>
//           <View className="flex-row justify-between">
//             <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>고객 센터</FontText>
//             <Entypo name="chevron-right" size={16} color="#1B1D1F" />
//           </View>
//           <View className="flex-row justify-between">
//             <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>제휴 문의</FontText>
//             <Entypo name="chevron-right" size={16} color="#1B1D1F" />
//           </View>
//           <View className="flex-row justify-between">
//             <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>약관 및 정책</FontText>
//             <Entypo name="chevron-right" size={16} color="#1B1D1F" />
//           </View>
//           <View className="flex-row justify-between">
//             <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>공지 사항</FontText>
//             <Entypo name="chevron-right" size={16} color="#1B1D1F" />
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }




import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert, Image, SafeAreaView, ScrollView, View } from 'react-native';
import FontText from '@/components/theme/FontText';
import Hr from '@/components/Hr';
import Entypo from '@expo/vector-icons/Entypo';
import ToggleButton from './ToggleButton';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyPage() {
  const [isOn, setIsOn] = useState(false); // ToggleButton 상태
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");

  // AsyncStorage에서 이미지 및 닉네임 불러오기
  useEffect(() => {
    const loadData = async () => {
      const storedImage = await AsyncStorage.getItem('profileImage');
      const storedName = await AsyncStorage.getItem("userName");
      const storedToggleState = await AsyncStorage.getItem("notificationToggle");

      if (storedImage) setProfileImage(storedImage);
      if (storedName) setUserName(storedName);
      if (storedToggleState) setIsOn(storedToggleState === "true"); // 문자열 "true" 비교
    };

    loadData();
  }, []);

  // Toggle 상태 변경 핸들러
  const handleToggle = async (value: boolean) => {
    setIsOn(value);
    await AsyncStorage.setItem("notificationToggle", value.toString()); // 상태를 AsyncStorage에 저장

    // Alert로 상태에 따라 메시지 표시
    if (value) {
      Alert.alert("알림 설정", "알림을 설정했습니다.");
    } else {
      Alert.alert("알림 설정", "알림을 설정하지 않았습니다.");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full p-3 justify-center mt-4 mb-3 ml-5">
          <View className="flex-row items-center gap-4">
            <Image
              source={{
                uri: profileImage || 'https://i.ibb.co/4pRkP2f/userIcon.png',
              }}
              style={{ width: 100, height: 100, borderRadius: 50, marginTop: 20 }}
            />
            <View className="flex-col gap-2">
              <FontText style={{ fontSize: 20, fontWeight: '800' }}>
                {userName || "닉네임"} {/* 닉네임 표시 */}
              </FontText>
              <FontText style={{ fontSize: 12 }}>카카오로그인</FontText>
              <TouchableOpacity
                className="w-30 bg-gray-50 border-2 border-gray-200 items-center rounded-xl px-5 py-1"
                onPress={() => router.push('pages/MyPage/MyPageDetail')}
              >
                <FontText className="text-[#1B1D1F]" style={{ fontSize: 16, fontWeight: '700' }}>
                  프로필 관리
                </FontText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Hr />
        <View className="w-full px-5 gap-6 mt-10">
          <View className="flex-row justify-between items-center">
            <View className='flex-col'>
              <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>알람 설정</FontText>
              <FontText className='text-[#9FA4A9]' style={{ fontSize: 14, fontWeight: '700' }}>푸시 알림을 설정합니다</FontText>
            </View>
            {/* ToggleButton 컴포넌트 */}
            <ToggleButton isOn={isOn} onToggle={handleToggle} />
          </View>
          <View className="flex-row justify-between">
            <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>개인 정보 관리</FontText>
            <Entypo name="chevron-right" size={16} color="#1B1D1F" />
          </View>
          <View className="flex-row justify-between">
            <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>고객 센터</FontText>
            <Entypo name="chevron-right" size={16} color="#1B1D1F" />
          </View>
          <View className="flex-row justify-between">
            <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>제휴 문의</FontText>
            <Entypo name="chevron-right" size={16} color="#1B1D1F" />
          </View>
          <View className="flex-row justify-between">
            <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>약관 및 정책</FontText>
            <Entypo name="chevron-right" size={16} color="#1B1D1F" />
          </View>
          <View className="flex-row justify-between">
            <FontText className='text-[#1B1D1F]' style={{ fontSize: 20, fontWeight: '800' }}>공지 사항</FontText>
            <Entypo name="chevron-right" size={16} color="#1B1D1F" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
