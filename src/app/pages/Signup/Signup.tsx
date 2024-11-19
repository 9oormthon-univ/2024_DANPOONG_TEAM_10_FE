//회원가입 페이지
import FontText from "@/components/theme/FontText";
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import SignupForm from "./module/SignupForm";
import BirthdatePicker from "./module/BirthdatePicker";

const Signup: React.FC = () => {

  return (
    <View style={styles.container}>
      {/* 입력폼 */}
     <SignupForm/>
      {/* 생년월일 */}
     <BirthdatePicker/>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("submit")}
      >
        <FontText style={styles.buttonText}>완료</FontText>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    alignItems: 'center',
    width:"100%"
  },
  button: {
    width: '60%',
    backgroundColor: '#053C57',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Signup;
