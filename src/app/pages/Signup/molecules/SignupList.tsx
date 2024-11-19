// import React from "react";
// import { View, Image, StyleSheet, ViewStyle, TextStyle } from "react-native";
// import FontText from "@/components/theme/FontText";

// interface SignupListProps {
//   title: string; // 제목
//   description?: string; // 선택적 설명
//   iconSource: any; // 아이콘 이미지 소스
// }

// const SignupList: React.FC<SignupListProps> = ({
//   title,
//   description,
//   iconSource,
// }) => {
//   return (
//     <View style={[styles.container]}>
//       <View style={styles.row}>
//         <FontText style={[styles.title]}>{title}</FontText>
//         <Image source={iconSource} style={styles.icon} />
//       </View>
//       {description && (
//         <FontText style={[styles.description, ]}>{description}</FontText>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 40,
//     width:"100%",
//     justifyContent: 'center',
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "baseline",
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   description: {
//     color: "#9FA4A9",
//     fontSize: 12,
//     marginTop: 4,
//   },
//   icon: {
//     marginLeft: 8,
//   },
// });

// export default SignupList;



import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import FontText from "@/components/theme/FontText";

interface SignupListProps {
  title: string;
  description?: string;
  iconSource: any;
  showRadioButtons?: boolean;
}

const SignupList: React.FC<SignupListProps> = ({
  title,
  description,
  iconSource,
  showRadioButtons = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View style={[styles.container]}>
      {/* 제목과 아이콘 */}
      <View style={styles.row}>
        <FontText style={[styles.title]}>{title}</FontText>
        <Image source={iconSource} style={styles.icon} />
      </View>

      {/* 설명 */}
      {description && (
        <FontText style={[styles.description]}>{description}</FontText>
      )}

      {/* 라디오 버튼*/}
      {showRadioButtons && (
          <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => handleSelect("동의합니다")}
          >
            <Text style={styles.radioText}>동의합니다.</Text>
            <View
              style={[
                styles.radioCircle,
                selectedOption === "동의합니다" && styles.radioSelected,
              ]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => handleSelect("동의하지 않습니다")}
          >
            <Text style={styles.radioText}>동의하지 않습니다.</Text>
            <View
              style={[
                styles.radioCircle,
                selectedOption === "동의하지 않습니다" && styles.radioSelected,
              ]}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    width: "100%",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#9FA4A9",
    fontSize: 12,
    marginTop: 4,
  },
  icon: {
    marginLeft: 8,
  },
  radioGroup: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent:"flex-end",
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#053C57",
    marginLeft: 12,
  },
  radioSelected: {
    backgroundColor: "#053C57", // 선택된 라디오 버튼 색상
  },
  radioText: {
    fontSize: 12,
    color: "#000",
  },
});

export default SignupList;
