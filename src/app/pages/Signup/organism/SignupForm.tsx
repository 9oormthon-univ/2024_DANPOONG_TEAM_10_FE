import FontText from "@/components/theme/FontText";
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const SignupForm: React.FC = () => {
  const [name, setName] = useState<string>('');;

  return (
    <View style={styles.container}>
      <FontText style={styles.font}>이름</FontText>
      <TextInput
        style={styles.input}
        placeholder="닉네임을 입력하세요"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#9FA4A9"
      />
      <View style={{ flexDirection: "row", alignItems:"center"}}>
  <Image
    source={require('@/assets/check-icon.png')}
    style={{ marginRight: 4 }}
  />
  <FontText style={{ color: "#053C57" , fontsize:12}}>사용 가능한 닉네임 입니다.</FontText>
</View>
<View style={{ flexDirection: "row", alignItems:"center"}}>
  <Image
    source={require('@/assets/warning-icon.png')}
    style={{ marginRight: 4}}
  />
  <FontText style={{ color: "#053C57" , fontsize:12}}>사용 불가능한 닉네임 입니다.</FontText>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",
    justifyContent: 'center',
  },
  input: {
    height: 36,
    borderColor: '#E9EBED',
    borderWidth: 1,
    marginTop: 12,
    marginBottom: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 12,
  },
    font: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignupForm;
