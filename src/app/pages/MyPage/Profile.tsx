import React, { useEffect, useState } from 'react';
import { View, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProfileProps {
  initialProfileImage: string | null;
}

const Profile = ({ initialProfileImage }: ProfileProps) => {
  const [profileImage, setProfileImage] = useState<string | null>(initialProfileImage);

  // 이미지 선택
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('권한 필요', '갤러리 접근 권한이 필요합니다.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

     //이미지 저장
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0].uri;
      setProfileImage(selectedImage);
      await AsyncStorage.setItem('profileImage', selectedImage); 
    }
  };

  // 이미지 삭제
  const deleteImage = async () => {
    setProfileImage(null);
    await AsyncStorage.removeItem('profileImage'); 
  };

  //이미지 불러오기
  useEffect(() => {
    const loadProfileImage = async () => {
      const storedImage = await AsyncStorage.getItem('profileImage');
      if (storedImage) {
        setProfileImage(storedImage);
      }
    };
    loadProfileImage();
  }, []);

  return (
    <View style={{ alignItems: 'center', marginVertical: 20 }}>
      <Image
        source={{ uri: profileImage || 'https://i.ibb.co/4pRkP2f/userIcon.png' }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Button title="이미지 선택" onPress={pickImage} />
        <Button title="이미지 삭제" onPress={deleteImage} color="red" />
      </View>
    </View>
  );
};

export default Profile;
