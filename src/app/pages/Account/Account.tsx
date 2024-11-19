//로그인페이지
// Account.tsx
import FontText from "@/components/theme/FontText";
import { View , Image, TouchableOpacity} from "react-native";
import { router } from 'expo-router';

export default function Account() {
  return (
    <View  style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      {/* logo */}
      <FontText>누구에게나 만족을 선사하는 오달지다</FontText>

      {/* LoginButton */}
      <TouchableOpacity onPress={() => router.push('pages/Signup/Signup')}>
        <Image source={require('@/assets/kakao-login.png')} />
      </TouchableOpacity>
    </View>
  );
}
