//로그인페이지
import FontText from "@/components/theme/FontText";
import { View , Image, TouchableOpacity} from "react-native";

export default function App() {
    return (
    <View>

      {/* logo */}
      <FontText>누구에게나 만족을 선사하는 오달지다</FontText>

      {/* LoginButton */}
      <TouchableOpacity
        onPress={() => console.log('clicked')}>
        <Image source={require('@/assets/kakao-login.png')} />
         </TouchableOpacity>
      </View>
    );
  }