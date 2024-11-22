import React, { useState } from "react";
import { View, Image, Button, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

interface ProfileProps {
  initialProfileImage: string | null;
  onImageChange: (newImage: string | null) => void;
}

export default function Profile({ initialProfileImage, onImageChange }: ProfileProps) {
  const [profileImage, setProfileImage] = useState<string | null>(initialProfileImage);
  const defaultImageUrl = "https://i.ibb.co/4pRkP2f/userIcon.png" ; // 기본 이미지 URL

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("권한 필요", "갤러리 접근 권한이 필요합니다.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0].uri;
      setProfileImage(selectedImage);
      onImageChange(selectedImage); // 변경 사항 상위로 전달
    }
  };

  const deleteImage = () => {
    setProfileImage(null);
    onImageChange(null); // 삭제 이벤트 상위로 전달
  };

  return (
    <View style={{ alignItems: "center", marginVertical: 20 }}>
      <Image
        source={{ uri: profileImage || defaultImageUrl }} // 기본 이미지를 표시
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Button title="이미지 선택" onPress={pickImage} />
        <Button title="이미지 삭제" onPress={deleteImage} color="red" />
      </View>
    </View>
  );
}
