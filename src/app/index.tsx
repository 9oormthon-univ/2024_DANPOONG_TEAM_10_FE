//첫 화면
import FontText from "@/components/theme/FontText";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontText>홈 화면</FontText>
      <TouchableOpacity
        onPress={() => router.push("pages/Account/Account")}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "#007bff",
          borderRadius: 5,
        }}
      >
        <FontText style={{ color: "#fff" }}>로그인으로 이동</FontText>
      </TouchableOpacity>
    </View>
  );
}
