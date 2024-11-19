import FontText from "@/components/theme/FontText";
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    justifyContent: 'center',
  },
  input: {
    width:'100%',
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
