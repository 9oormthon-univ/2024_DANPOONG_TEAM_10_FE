//로그인 페이지
import { View , Image, TouchableOpacity} from "react-native";
import { router } from 'expo-router';

export default function Account() {
  return (
    <View  style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap:200,
    }}>
      {/* logo */}
      <Image source={require('@/assets/logo.png')} />
      
      {/* LoginButton */}
      <TouchableOpacity 
      onPress={() => router.push('pages/Signup/Signup')}>
        <Image source={require('@/assets/kakao-login.png')} />
      </TouchableOpacity>
    </View>
  );
}