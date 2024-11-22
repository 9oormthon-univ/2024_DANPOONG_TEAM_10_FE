//로그인 페이지
import { View , Image, TouchableOpacity} from "react-native";
import { router } from 'expo-router';

export default function Account() {
  return (
    <View  className="flex-1 justify-center items-center gap-48">
      {/* logo */}
      <Image source={require('@/assets/logo.png')} />
      
      {/* LoginButton */}
      <TouchableOpacity 
      onPress={() => router.push('pages/Account/KakaoLogin')}>
        <Image source={require('@/assets/kakao-login.png')} />
      </TouchableOpacity>
    </View>
  );
}
