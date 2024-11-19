import FontText from "@/components/theme/FontText";
import { View } from "react-native";
import { Link } from 'expo-router';

export default function App() {
  return (
  <View>
    <Link href="/pages/Account/Account">About</Link>
    <FontText>jasdiofj</FontText>
    </View>
  );
}