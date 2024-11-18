import { Image, TouchableOpacity, View } from "react-native";
import FontText from "../theme/FontText";

export default function Navbar() {
  return (
    <View>
      <TouchableOpacity>
        <Image />
        <FontText>홈</FontText>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image />
        <FontText>좋아요</FontText>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image />
        <FontText>달력</FontText>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image />
        <FontText>내 프로필</FontText>
      </TouchableOpacity>
    </View>
  );
}
