//회원가입 페이지
import FontText from "@/components/theme/FontText";
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import SignupForm from "./organism/SignupForm";
import BirthdatePicker from "./organism/BirthdatePicker";
import SignupList from "./molecules/SignupList";

const Signup: React.FC = () => {

  return (
    <View style={styles.container}>

      {/* 입력폼 */}
      <View style={styles.gap}>
     <SignupForm/>
     </View>

      {/* 생년월일 */}
     <View style={styles.gap}>
     <BirthdatePicker/>
     </View>

      {/* 본인인증 */}
     <SignupList
        title="본인인증"
        iconSource={require('@/assets/vector-icon.png')}
      />
      <SignupList
        title="서비스 이용 약관"
        iconSource={require('@/assets/vector-icon.png')}
        description="동의를 거절하는 경우 서비스 이용이 제한 될 수 있습니다."
        showRadioButtons
      />
       <SignupList
        title="개인 정보 활용 동의"
        iconSource={require('@/assets/vector-icon.png')}
         description="동의를 거절하는 경우 서비스 이용이 제한 될 수 있습니다."
         showRadioButtons
      />
       <SignupList
        title="마켓팅 수신 동의"
        iconSource={require('@/assets/vector-icon.png')}
         description="동의를 거절하는 경우 서비스 이용이 제한 될 수 있습니다."
         showRadioButtons
      />
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
    alignItems:"center",
    padding: 26,
    width:"100%",
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
  gap:{
    marginBottom:40,
  },
  font: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Signup;
